import { useState } from "react";

import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function KeywordSearch() {
  const [keyword, setKeyword] =
    useState("");

  const handleSearch = () => {
    console.log(keyword);
  };

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
        onClick={handleSearch}
      >
        Keresés
      </Button>
    </Stack>
  );
}
