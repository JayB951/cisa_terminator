import { List } from "@mui/material";

import { useKeywordStore } from "../../store/keywordStore";

import KeywordResultItem from "./KeywordResultItem";

export default function KeywordResults() {
  const results =
    useKeywordStore(
      (state) => state.results
    );

  return (
    <List dense>
      {results.map((result) => (
        <KeywordResultItem
          key={result.keyword}
          keyword={result.keyword}
          page={result.page}
        />
      ))}
    </List>
  );
}
