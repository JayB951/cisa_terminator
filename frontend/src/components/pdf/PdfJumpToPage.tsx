import { useState } from "react";

import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

import usePdfNavigation from "../../hooks/usePdfNavigation";

export default function PdfJumpToPage() {
  const [page, setPage] =
    useState("");

  const { goToPage } =
    usePdfNavigation();

  const handleJump = () => {
    const pageNumber =
      Number(page);

    if (!pageNumber) return;

    goToPage(pageNumber);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <TextField
        size="small"
        type="number"
        value={page}
        onChange={(e) =>
          setPage(e.target.value)
        }
      />

      <Button
        variant="outlined"
        onClick={handleJump}
      >
        Ugrás
      </Button>
    </Stack>
  );
}
