
import { Tabs, Box } from '@mui/material'
import Navbar from './Navbar'
import Content from './Content'



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