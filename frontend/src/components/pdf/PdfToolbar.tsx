import { Box } from "@mui/material";

import PdfCurrentPage from "./PdfCurrentPage";
import PdfJumpToPage from "./PdfJumpToPage";

export default function PdfToolbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <PdfJumpToPage />

      <PdfCurrentPage />
    </Box>
  );
}
