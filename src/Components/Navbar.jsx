
import {Box,Stack,Typography,Avatar,Badge,Button} from '@mui/material'

import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Navbar = () => {
  return (
    <Box  height="20vh">
      
        <Box height="50%"  >
        <Box display="flex" justifyContent="space-between" p={3}  >
<Typography variant="h5" sx={{color:"primary" ,fontWeight:"bold"}}>
  Students
</Typography>
<Stack direction="row" spacing={3}>
<Badge badgeContent={4} color="success">
<CircleNotificationsRoundedIcon/>
</Badge>

<SettingsRoundedIcon/>
<Avatar>H</Avatar>

</Stack>
        </Box>
          </Box >
          <Box height="50%">
          <Box display="flex" justifyContent="space-between" p={3}  >
         
 


    <Paper
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: 250 ,borderRadius:"25px"}}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here"
        inputProps={{ 'aria-label': 'search here' }}
      />
      
     
    </Paper>


<Stack direction="row" spacing={3}>
<Button sx={{borderRadius:"20px"}} variant="outlined" endIcon={<ArrowDropDownIcon />}>
  Newest
</Button>
<Button sx={{borderRadius:"20px"}} variant="contained" startIcon={<AddIcon />}>
 New student
</Button>



</Stack>
        </Box> 
          </Box>
          

       
    </Box>
  )
}

export default Navbar