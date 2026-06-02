import { Typography } from "@mui/material";

import { useViewerStore } from "../../store/viewerStore";

export default function NotesHeader() {
  const currentPage =
    useViewerStore(
      (state) => state.currentPage
    );

  return (
    <Typography
      variant="body2"
      color="text.secondary"
    >
      Oldal: {currentPage}
    </Typography>
  );
}
