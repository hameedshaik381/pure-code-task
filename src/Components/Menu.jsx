import {Routes,BrowserRouter,Route,Link} from 'react-router-dom'
import Content from './Student'

import React from 'react'

const Menu = () => {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/Dashboard" elememt={<Dashboard/>}/>
        <Route path="/Student" elememt={<Content/>}/>
    <Route path="/Teachers" elememt={<Teachers/>}/>
        <Route path="/Event" elememt={<Event/>}/>
        <Route path="/Finance" elememt={<Finance/>}/>
        <Route path="/Food" elememt={<Food/>}/>
        <Route path="/User" elememt={<Users/>}/>
        <Route path="/Chat" elememt={<Chat/>}/>
        <Route path="/Latestactivity" elememt={<Latestactivity/>}/>
       </Routes>
        

    </BrowserRouter>
  )
}

export default Menu