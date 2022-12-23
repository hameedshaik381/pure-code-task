
import {  Box } from '@mui/material'
import Navbar from './Navbar'
import Maincontent from './Maincontent'



const Main = () => {
  return (
   <Box display="block" >
<Box>
  <Navbar/>
</Box>
<Box>
  <Maincontent/>
</Box>
   </Box>
  )
}

export default Main