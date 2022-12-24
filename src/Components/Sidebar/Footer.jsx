import React from 'react'
import { Box, Typography } from "@mui/material"

const Footer = () => {

  return (
    <Box p={3}>
      <Typography sx={{ fontSize: "12px", color: "whitesmoke", fontWeight: "bold" }}>
        Akademi-school Admission Dashboard
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#D3D3D3", fontWeight: "bold", textAlign: "center" }}>
        Made by Hameed
      </Typography>
    </Box>
  )
}

export default Footer