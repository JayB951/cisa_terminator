import { PageNote } from "../store/noteStore";

export function exportNotes(
  notes: PageNote[]
) {
  let content = "";

  notes.forEach((note) => {
    content += `PAGE=${note.pageNumber}\n`;
    content += `${note.content}\n\n`;
  });

  return content;
}
