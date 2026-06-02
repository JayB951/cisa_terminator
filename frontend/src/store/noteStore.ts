import { create } from "zustand";

export interface PageNote {
  pageNumber: number;
  content: string;
  updatedAt: string;
}

interface NoteState {
  notes: PageNote[];

  setNotes: (notes: PageNote[]) => void;

  updateNote: (
    pageNumber: number,
    content: string
  ) => void;

  getNoteByPage: (
    pageNumber: number
  ) => PageNote | undefined;

  clearNotes: () => void;
}

export const useNoteStore =
  create<NoteState>((set, get) => ({
    notes: [],

    setNotes: (notes) =>
      set({
        notes,
      }),

    updateNote: (
      pageNumber,
      content
    ) => {
      const notes = get().notes;

      const existing = notes.find(
        (n) => n.pageNumber === pageNumber
      );

      if (existing) {
        existing.content = content;
        existing.updatedAt =
          new Date().toISOString();

        set({
          notes: [...notes],
        });

        return;
      }

      set({
        notes: [
          ...notes,
          {
            pageNumber,
            content,
            updatedAt:
              new Date().toISOString(),
          },
        ],
      });
    },

    getNoteByPage: (pageNumber) =>
      get().notes.find(
        (n) => n.pageNumber === pageNumber
      ),

    clearNotes: () =>
      set({
        notes: [],
      }),
  }));
