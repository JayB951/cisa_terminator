import {
  ListItemButton,
  ListItemText,
} from "@mui/material";

import usePdfNavigation from "../../hooks/usePdfNavigation";

type Props = {
  keyword: string;
  page: number;
};

export default function KeywordResultItem({
  keyword,
  page,
}: Props) {
  const { goToPage } =
    usePdfNavigation();

  return (
    <ListItemButton
      onClick={() =>
        goToPage(page)
      }
    >
      <ListItemText
        primary={keyword}
        secondary={`Oldal ${page}`}
      />
    </ListItemButton>
  );
}
