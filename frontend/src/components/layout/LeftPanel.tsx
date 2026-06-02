import {
  Box,
  Typography,
  Divider,
} from "@mui/material";

import ReviewSource from "../sources/ReviewSource";
import DomainNavigation from "../navigation/DomainNavigation";
import KeywordSearch from "../navigation/KeywordSearch";

export default function LeftPanel() {
  return (
    <Box p={2}>
      <Typography
        variant="h6"
        gutterBottom
      >
        Források
      </Typography>

      <ReviewSource />

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="h6"
        gutterBottom
      >
        Domain Navigáció
      </Typography>

      <DomainNavigation />

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="h6"
        gutterBottom
      >
        Keyword → Page
      </Typography>

      <KeywordSearch />
    </Box>
  );
}
