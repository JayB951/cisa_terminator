import {
  Box,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function PdfToolbar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 1,
      }}
    >
      <TextField
        label="Keresés"
        size="small"
        sx={{ width: 300 }}
      />

      <IconButton>
        <SearchIcon />
      </IconButton>

      <Typography variant="body2">
        Oldal: —
      </Typography>

      <Typography variant="body2">
        Zoom: 100%
      </Typography>
    </Box>
  );
}
