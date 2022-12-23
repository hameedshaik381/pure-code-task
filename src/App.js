import { Box } from '@mui/material'
import {indigo} from "@mui/material/colors"
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/MainBody/Main'

const color=indigo[50];

function App() {
  return (
  <>
   
<Box  display="flex">
 
<Box width="20vw" height="100vh">
<Sidebar/>
</Box>
<Box width="80vw" height="100vh" bgcolor={color}>
<Main/>
</Box>
  </Box>

</>

  );
}

export default App;
