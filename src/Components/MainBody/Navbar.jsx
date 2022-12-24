
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
        <Box display="flex" justifyContent="space-between" p={4}  >
<Typography variant="h5" sx={{
    color:"#482880" ,fontWeight:"bold",marginX:"30px"
   }}>
  Students
</Typography>
<Stack direction="row" spacing={3}>
<Badge badgeContent={4} color="success">
<CircleNotificationsRoundedIcon fontSize="medium"/>
</Badge>

<SettingsRoundedIcon fontSize="medium" fontWeight="bold"/>
<Box display="flex" >
  <Stack marginX="10px" >
    <Typography color="primary" fontSize="small">Hameed shaik</Typography>
    <Typography color="grey"  fontSize="small" textAlign="right">Admin</Typography>
  </Stack>
<Avatar>H</Avatar>
</Box>

</Stack>
        </Box>
          </Box >
          <Box height="50%">
          <Box display="flex" justifyContent="space-between" p={3}  >
         
 


    <Paper
      component="form"
      sx={{  display: 'flex', marginX:"30px",alignItems: 'center', width: 240 ,borderRadius:"20px"}}
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
<Button sx={{
    borderRadius:"20px"
   }} variant="outlined" endIcon={<ArrowDropDownIcon />}>
  Newest
</Button>
<Button sx={{
    borderRadius:"20px"
   }}  variant="contained" startIcon={<AddIcon />}>
 New student
</Button>



</Stack>
        </Box> 
          </Box>
          

       
    </Box>
  )
}

export default Navbar