import { Box } from "@mui/material";

import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        overflow: "hidden",
      }}
    >
      {/* Bal panel */}
      <Box
        sx={{
          width: 320,
          borderRight: "1px solid #e2e8f0",
          backgroundColor: "#f8fafc",
          overflowY: "auto",
        }}
      >
        <LeftPanel />
      </Box>

      {/* PDF Viewer */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <CenterPanel />
      </Box>

      {/* Jobb panel */}
      <Box
        sx={{
          width: 360,
          borderLeft: "1px solid #e2e8f0",
          backgroundColor: "#f8fafc",
          overflowY: "auto",
        }}
      >
        <RightPanel />
      </Box>
    </Box>
  );
}
