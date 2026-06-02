import {
  List,
  Paper,
} from "@mui/material";

import { useDomainStore } from "../../store/domainStore";

import DomainTopicItem from "./DomainTopicItem";

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
            <DomainTopicItem
              key={topic.title}
              title={topic.title}
              page={topic.page}
            />
          )
        )}
      </List>
    </Paper>
  );
}
