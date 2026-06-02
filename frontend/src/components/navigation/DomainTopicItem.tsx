import {
  ListItemButton,
  ListItemText,
} from "@mui/material";

import usePdfNavigation from "../../hooks/usePdfNavigation";

type Props = {
  title: string;
  page: number;
};

export default function DomainTopicItem({
  title,
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
        primary={title}
        secondary={`${page}. oldal`}
      />
    </ListItemButton>
  );
}
