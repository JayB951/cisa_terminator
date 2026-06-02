import { useEffect, useState } from "react";

import {
  TextField,
  Button,
} from "@mui/material";

import usePageNotes from "../../hooks/usePageNotes";

export default function PageNotesEditor() {
  const {
    currentPage,
    currentNote,
    updateNote,
  } = usePageNotes();

  const [text, setText] =
    useState("");

  useEffect(() => {
    setText(
      currentNote?.content || ""
    );
  }, [currentNote]);

  const handleSave = () => {
    updateNote(
      currentPage,
      text
    );
  };

  return (
    <>
      <TextField
        multiline
        rows={12}
        fullWidth
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSave}
      >
        Jegyzet mentése
      </Button>
    </>
  );
}
