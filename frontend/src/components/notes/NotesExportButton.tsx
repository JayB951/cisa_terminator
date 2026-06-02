import { Button } from "@mui/material";

import { useNoteStore } from "../../store/noteStore";

import { exportNotes } from "../../services/noteExportService";

export default function NotesExportButton() {
  const notes =
    useNoteStore(
      (state) => state.notes
    );

  const handleExport = () => {
    const content =
      exportNotes(notes);

    const blob =
      new Blob(
        [content],
        {
          type: "text/plain",
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download =
      "cisa-notes.txt";

    a.click();
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={handleExport}
    >
      Jegyzetek exportálása
    </Button>
  );
}
