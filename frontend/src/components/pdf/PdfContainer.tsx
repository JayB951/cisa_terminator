import { Box } from "@mui/material";

import PdfToolbar from "./PdfToolbar";
import PdfEmptyState from "./PdfEmptyState";

export default function PdfContainer() {
  const pdfUrl = "";

  if (!pdfUrl) {
    return <PdfEmptyState />;
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PdfToolbar />

      {/* Ide kerül a PdfViewer */}
    </Box>
  );
}
