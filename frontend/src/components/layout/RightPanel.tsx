import {
  Box,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  Stack,
} from "@mui/material";

import NotesHeader from "../notes/NotesHeader";
import PageNotesEditor from "../notes/PageNotesEditor";
import NotesExportButton from "../notes/NotesExportButton";

export default function RightPanel() {
  return (
    <Box p={2}>
      {/* Tanulási Segédletek */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Tanulási Segédletek
      </Typography>

      <Stack spacing={1.5}>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography fontWeight={600}>
                Flash Cards
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Előre generált tanulókártyák
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography fontWeight={600}>
                Summary
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Témakivonat
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography fontWeight={600}>
                Cheat Sheet
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Vizsga előtti gyors áttekintő
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography fontWeight={600}>
                Definitions
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Kulcsfogalmak
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography fontWeight={600}>
                Concept Map
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Fogalmi kapcsolatok
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* Jegyzetek */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Saját Jegyzetek
      </Typography>

      <NotesHeader />

      <PageNotesEditor />

      <Box mt={2}>
        <NotesExportButton />
      </Box>
    </Box>
  );
}
