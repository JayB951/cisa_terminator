import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";

export default function LeftPanel() {
  return (
    <Box p={2}>
      {/* Források */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Források
      </Typography>

      <TextField
        label="Review Domain Link"
        placeholder="https://..."
        size="small"
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
      >
        Review betöltése
      </Button>

      <TextField
        label="Question Bank Link"
        placeholder="Későbbi fejlesztés"
        size="small"
        fullWidth
        margin="normal"
        disabled
      />

      <TextField
        label="Notes File"
        placeholder="TXT vagy PDF"
        size="small"
        fullWidth
        margin="normal"
        disabled
      />

      <Divider sx={{ my: 3 }} />

      {/* Domain Navigáció */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Domain Navigáció
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          maxHeight: 250,
          overflowY: "auto",
          mb: 2,
        }}
      >
        <List dense>
          <ListItemButton>
            <ListItemText
              primary="Governance"
              secondary="12. oldal"
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Risk Management"
              secondary="34. oldal"
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Internal Controls"
              secondary="57. oldal"
            />
          </ListItemButton>
        </List>
      </Paper>

      <Divider sx={{ my: 3 }} />

      {/* Keyword kereső */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Keyword → Page
      </Typography>

      <TextField
        label="Kulcsszó"
        placeholder="Audit Charter"
        size="small"
        fullWidth
      />

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 1 }}
      >
        Keresés
      </Button>

      <Box mt={2}>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Találat:
        </Typography>

        <Typography
          variant="body1"
          fontWeight={600}
        >
          —
        </Typography>
      </Box>
    </Box>
  );
}
