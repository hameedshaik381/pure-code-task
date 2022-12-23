
import { Box } from '@mui/material'
import Navbar from './Navbar'
// import {Outlet} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Student from './mainComponents/Student'
import Dashboard from "./mainComponents/Dashboard"
import Finance from "./mainComponents/Finance"
import Food from "./mainComponents/Food"
import Users from "./mainComponents/Users"
import Chat from "./mainComponents/Chat"
import Latestactivity from './mainComponents/Latestactivity'
import Events from "./mainComponents/Events"
import Teachers from "./mainComponents/Teachers"



const Main = () => {
  return (
    <Box display="block" >
      <Box>
        <Navbar />
      </Box>
      <Box >
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