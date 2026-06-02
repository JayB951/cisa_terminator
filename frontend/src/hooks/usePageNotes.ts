import { useNoteStore } from "../store/noteStore";
import { useViewerStore } from "../store/viewerStore";

export default function usePageNotes() {
  const currentPage =
    useViewerStore(
      (state) => state.currentPage
    );

  const notes =
    useNoteStore(
      (state) => state.notes
    );

  const updateNote =
    useNoteStore(
      (state) => state.updateNote
    );

  const currentNote =
    notes.find(
      (n) =>
        n.pageNumber === currentPage
    );

  return {
    currentPage,
    currentNote,
    updateNote,
  };
}
