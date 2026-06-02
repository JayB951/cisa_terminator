import { useState } from "react";

import {
  Stack,
  TextField,
  Button,
} from "@mui/material";

import useKeywordSearch from "../../hooks/useKeywordSearch";

import KeywordResults from "./KeywordResults";

export default function KeywordSearch() {
  const [keyword, setKeyword] =
    useState("");

  const { executeSearch } =
    useKeywordSearch();

  return (
    <Stack spacing={1}>
      <TextField
        label="Kulcsszó"
        value={keyword}
        size="small"
        onChange={(e) =>
          setKeyword(
            e.target.value
          )
        }
      />

      <Button
        variant="outlined"
        onClick={() =>
          executeSearch(keyword)
        }
      >
        Keresés
      </Button>

      <KeywordResults />
    </Stack>
  );
}
