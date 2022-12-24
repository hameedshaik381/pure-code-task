
import {Box,Stack,Typography,Avatar,Badge,Button} from '@mui/material'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useNavStyles} from "./Navbarstyle"


const Navbar = () => {
  const classes = useNavStyles()
  return (
    <Box  height="20vh">
      
        <Box height="50%"  >
        <Box display="flex" justifyContent="space-between" p={4}  >
<Typography variant="h5" className={classes.title}>
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
      className={classes.paper}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.inputbase}
        placeholder="Search here"
        inputProps={{ 'aria-label': 'search here' }}
      />
      
     
    </Paper>


<Stack direction="row" spacing={3}>
<Button className={classes.btn} variant="outlined" endIcon={<ArrowDropDownIcon />}>
  Newest
</Button>
<Button className={classes.btn}  variant="contained" startIcon={<AddIcon />}>
 New student
</Button>



</Stack>
        </Box> 
          </Box>
          

       
    </Box>
  )
}

export default Navbar