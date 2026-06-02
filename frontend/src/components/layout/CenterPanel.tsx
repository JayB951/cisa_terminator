import {
  Box,
  Typography,
  Paper,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function CenterPanel() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Viewer Toolbar */}
      <Paper
        elevation={0}
        square
        sx={{
          p: 1.5,
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          size="small"
          label="Keresés PDF-ben"
          placeholder="audit charter..."
          sx={{ width: 300 }}
        />

        <IconButton>
          <SearchIcon />
        </IconButton>

        <Divider orientation="vertical" flexItem />

        <Typography variant="body2">
          Oldal: —
        </Typography>

        <Typography variant="body2">
          Zoom: 100%
        </Typography>
      </Paper>

      {/* PDF Viewer Area */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          backgroundColor: "#f1f5f9",
          overflow: "auto",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            height: "100%",
            minHeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="h5"
              gutterBottom
            >
              PDF Viewer
            </Typography>

            <Typography color="text.secondary">
              Nincs betöltött Review dokumentum
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
