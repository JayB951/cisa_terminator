import { useState } from "react";

import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useViewerStore } from "../../store/viewerStore";

export default function ReviewSource() {
  const [url, setUrl] = useState("");

  const setPdfUrl =
    useViewerStore(
      (state) => state.setPdfUrl
    );

  const handleLoad = () => {
    if (!url.trim()) return;

    setPdfUrl(url);
  };

  return (
    <Stack spacing={1}>
      <TextField
        label="Review Domain Link"
        value={url}
        size="small"
        onChange={(e) =>
          setUrl(e.target.value)
        }
      />

      <Button
        variant="contained"
        onClick={handleLoad}
      >
        Review betöltése
      </Button>
    </Stack>
  );
}
