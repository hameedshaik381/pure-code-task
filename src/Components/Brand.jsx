import {Box,Typography} from '@mui/material'

const Brand = () => {
  return (
    <Box p={3} display="flex" >
      <Typography variant="h5" sx={{color:"white" ,fontWeight:"bold" ,padding:"2px", backgroundColor:"orangered",borderRadius:"5px"}}>
  A
</Typography>
<Typography sx={{color:"white" ,fontWeight:"bold" ,padding:"10px"}}>
  Akademia
</Typography>
    </Box>
  )
}

export default Brand