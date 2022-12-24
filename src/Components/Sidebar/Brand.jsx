import { Box, Typography } from '@mui/material'



const Brand = () => {
  
  return (
    <Box sx={{p:2 ,display:"flex", marginX:"30px"}} >
      <Box sx={{
      color:"white" ,fontWeight:"bold" ,padding:"10px",fontSize:"20px",height:"20px" ,backgroundColor:"orange",borderRadius:"10px", justifyContent:"center",marginTop:"8px",textAlign:"center"
  
    }}>
        A
      </Box>
      <Typography sx={{
      color:"white" ,fontWeight:"bold" ,padding:"15px",fontSize:"20px"
    }}>
        Akademi
      </Typography>
    </Box>
  )
}

export default Brand