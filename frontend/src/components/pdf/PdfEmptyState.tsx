import { Box, Typography } from "@mui/material";

export default function PdfEmptyState() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          CISA Review Viewer
        </Typography>

        <Typography color="text.secondary">
          Adj meg egy Review Domain Linket a bal oldali panelen.
        </Typography>
      </Box>
    </Box>
  );
}
