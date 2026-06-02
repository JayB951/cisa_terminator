import { Box } from "@mui/material";

import PdfViewer from "./PdfViewer";

type Props = {
  pdfUrl: string;
};

export default function PdfViewerWrapper({
  pdfUrl,
}: Props) {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      <PdfViewer pdfUrl={pdfUrl} />
    </Box>
  );
}
