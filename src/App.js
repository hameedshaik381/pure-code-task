import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Main from "./Components/Topbar/Main.jsx";
import { indigo } from "@mui/material/colors";
const color = indigo[50];

const App = () => {
  return (
    <Box display="flex">
      <Box width="20vw" height="100vh">
        <Sidebar />
      </Box>
      <Box width="80vw"  bgcolor={color}>
        <Main />
      </Box>
    </Box>
  );
};

export default App;
