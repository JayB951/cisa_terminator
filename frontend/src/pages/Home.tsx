import { Box } from "@mui/material";

import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <Header />
      <MainLayout />
    </Box>
  );
}
