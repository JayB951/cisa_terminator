import { Typography } from "@mui/material";

import { useViewerStore } from "../../store/viewerStore";

export default function PdfCurrentPage() {
  const currentPage =
    useViewerStore(
      (state) => state.currentPage
    );

  return (
    <Typography variant="body2">
      Oldal: {currentPage}
    </Typography>
  );
}
