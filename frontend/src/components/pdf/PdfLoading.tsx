import { Box, CircularProgress, Typography } from "@mui/material";

export default function PdfLoading() {
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
        <CircularProgress />

        <Typography
          variant="body2"
          sx={{ mt: 2 }}
        >
          PDF betöltése...
        </Typography>
      </Box>
    </Box>
  );
}
