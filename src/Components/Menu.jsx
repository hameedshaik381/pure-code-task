import { Routes, BrowserRouter, Route,Link } from 'react-router-dom'
import {Box} from "@mui/material"
import Student from './mainComponents/Student'
import Dashboard from "./mainComponents/Dashboard"
import Finance from "./mainComponents/Finance"
import Food from "./mainComponents/Food"
import Users from "./mainComponents/Users"
import Chat from "./mainComponents/Chat"
import Latestactivity from './mainComponents/Latestactivity'
import Events from "./mainComponents/Events"
import Teachers from "./mainComponents/Teachers"




import React from 'react'

const Menu = () => {
  return (
    
    <BrowserRouter>
    <Box>
<Link to="/student">student</Link>
    </Box>
      <Routes>
        <Route path="/Dashboard" elememt={<Dashboard />} />
        <Route path="/Student" elememt={<Student />} />
        <Route path="/Teachers" elememt={<Teachers />} />
        <Route path="/Event" elememt={<Events />} />
        <Route path="/Finance" elememt={<Finance />} />
        <Route path="/Food" elememt={<Food />} />
        <Route path="/User" elememt={<Users />} />
        <Route path="/Chat" elememt={<Chat />} />
        <Route path="/Latestactivity" elememt={<Latestactivity />} />
      </Routes>


    </BrowserRouter>
    
    
    
  )
}

export default Menu