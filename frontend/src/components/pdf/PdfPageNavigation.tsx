import {
  Box,
  TextField,
  Button,
} from "@mui/material";

export default function PdfPageNavigation() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
    >
      <TextField
        label="Oldal"
        size="small"
        type="number"
        sx={{ width: 100 }}
      />

      <Button variant="outlined">
        Ugrás
      </Button>
    </Box>
  );
}
