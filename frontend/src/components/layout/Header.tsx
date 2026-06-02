import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#1e293b",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            CISA TERMINATOR
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.8,
          }}
        >
          Review Viewer v0.1
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
