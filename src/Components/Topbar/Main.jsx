
import { Box } from '@mui/material'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import { Student, Dashboard, Finance, Food, Users, Chat, Latestactivity, Events, Teachers } from './Navigationlist.jsx'




const Main = () => {
  return (
    <Box display="block" >
      
        <Navbar />
        <Box justifyContent="center" alignItems="center" paddingX={8} >
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Student />} exact />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/User" element={<Users />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Latestactivity" element={<Latestactivity />} />
        </Routes>
        </Box>
       
      
      
       
     
    </Box>
  )
}

export default Main