import { Link } from 'react-router-dom'
import {Box} from "@mui/material"
import {List,ListItem,ListItemText,ListItemIcon} from "@mui/material"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Person4Icon from '@mui/icons-material/Person4';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WaterIcon from '@mui/icons-material/Water';


import React from 'react'

const Menu = () => {
  return (
    
    
    <Box sx={{paddingX:"50px",paddingY:"10px",display:"block"}}>
<List disablePadding={true} sx={{color:"#A0A0A0"}}>
<ListItem button={true} component={Link} to="/Dashboard">
  <ListItemIcon sx={{color:"#A0A0A0"}}>
    <HomeOutlinedIcon/>
    </ListItemIcon>
    
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Dashboard" />
</ListItem>
<ListItem button={true} component={Link} to="/">
<ListItemIcon sx={{color:"#A0A0A0"}}>
    <PersonIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Students"/>
</ListItem>
<ListItem button={true} component={Link} to="/Teachers">
<ListItemIcon sx={{color:"#A0A0A0"}}>
    <Person4Icon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Teachers"/>
</ListItem>
<ListItem button={true} component={Link} to="/Events">
<ListItemIcon sx={{color:"#A0A0A0"}}>
    <EventNoteIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Events"/>
</ListItem>
<ListItem button={true} component={Link} to="/Finance">
<ListItemIcon sx={{color:"#A0A0A0"}}>
    <CleanHandsIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Finance" />
</ListItem>
<ListItem button={true} component={Link} to="/Food">
<ListItemIcon sx={{color:"#A0A0A0"}}>
    <RestaurantIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Food"/>
</ListItem>
<ListItem button={true} component={Link} to="/User">
<ListItemIcon sx={{color:"#A0A0A0"}}>
<PersonOutlineIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="User"/>
</ListItem>
<ListItem button={true} component={Link} to="/Chat">
<ListItemIcon sx={{color:"#A0A0A0"}}>
<ChatBubbleOutlineIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Chat"/>
</ListItem>
<ListItem button={true} component={Link} to="/Latestactivity">
<ListItemIcon sx={{color:"#A0A0A0"}}>
<WaterIcon/>
    </ListItemIcon>
  <ListItemText sx={{fontSize:"10px"}} disableTopography={true} primary="Latestactivity"/>
</ListItem>


  </List>


      

      </Box>
   
    
    
    
  )
}

export default Menu