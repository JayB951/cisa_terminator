import { Box } from "@mui/material";

import { useViewerStore } from "../../store/viewerStore";

import PdfToolbar from "./PdfToolbar";
import PdfViewerWrapper from "./PdfViewerWrapper";
import PdfEmptyState from "./PdfEmptyState";

export default function PdfContainer() {
  const pdfUrl =
    useViewerStore(
      (state) => state.pdfUrl
    );

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

      <PdfViewerWrapper
        pdfUrl={pdfUrl}
      />
    </Box>
  );
}
