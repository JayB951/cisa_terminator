import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";

import { useDomainStore } from "../../store/domainStore";

export default function DomainNavigation() {
  const currentDomain =
    useDomainStore(
      (state) => state.currentDomain
    );

  if (!currentDomain) {
    return null;
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        maxHeight: 300,
        overflowY: "auto",
      }}
    >
      <List dense>
        {currentDomain.topics.map(
          (topic) => (
            <ListItemButton
              key={topic.title}
            >
              <ListItemText
                primary={topic.title}
                secondary={`${topic.page}. oldal`}
              />
            </ListItemButton>
          )
        )}
      </List>
    </Paper>
  );
}
