
import { Box, Stack, Typography, Avatar,Link,} from '@mui/material'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import IconButton from '@mui/material/IconButton';




const Navbar = () => {

  return (
   <Box display='flex' justifyContent="space-between" p={1}  >
   <Typography margin={1} marginX={6} fontWeight="bold" variant="h3" color="indigo" align="center" >Students</Typography>
   <Stack direction="row" p={1} spacing={2} >
   <IconButton >
  < NotificationsNoneIcon fontSize="medium" color="disabled"/>
</IconButton>
  
<IconButton >
  <SettingsOutlinedIcon fontSize="medium" color="disabled"/>
</IconButton>
<Stack spacing={1}>
  <Typography fontSize="10px" color="indigo">
    
   <Link component={Link} underline="none" > Hameed shaik</Link>
  </Typography>
  <Typography fontSize="10px" color="grey" textAlign="right" >
  Admin
  </Typography>
</Stack>
<Avatar >H</Avatar>
   </Stack>
   </Box>
  )
}

export default Navbar