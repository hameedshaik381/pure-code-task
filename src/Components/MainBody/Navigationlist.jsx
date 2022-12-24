
 import { DataGrid} from '@mui/x-data-grid';
 import {Box,Stack,Avatar,Typography,Link} from '@mui/material'
 import CallIcon from '@mui/icons-material/Call';
 import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 import {indigo} from "@mui/material/colors"
 const color1=indigo[300];
 const color2=indigo[500];
 const rows = [
  { id: 1, col1: 'Samantha william', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Amanda William" ,col5:"jakarta",col7:"VIIA"},
  { id: 2, col1: 'Tony Soap', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Geaorge Soap" ,col5:"jakarta",col7:"VIIB"},
  { id: 3, col1: 'Karen Hope', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Shai Hope" ,col5:"jakarta",col7:"VIIC"},
  { id: 4, col1: 'Jordan Nico', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Lauren Nico" ,col5:"jakarta",col7:"VIID"},
  { id: 5, col1: 'Nadila Adja', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Shamila adja" ,col5:"jakarta",col7:"VIIE"},

 

];

const columns = [
  
  { field: 'col1',editable:true, headerName: 'Name', width: 150 ,renderCell:(params)=>{
    return(<Box display="flex">
      <Avatar src={{width:10,height:10}}/>
    <Typography padding={1} fontWeight="bold" fontSize="12px" >{params.row.col1}</Typography></Box>)
    }},
  { field: 'col2',editable:true, headerName: 'id', width: 120 ,renderCell:(params)=>{
    return(
      
    <Typography padding={1} fontWeight="bold" fontSize="12px" >{params.row.col2}</Typography>)
    }},
  { field: 'col3', headerName: 'Date', width: 120,renderCell:(params)=>{
    return(
      
    <Typography padding={1} fontWeight="100" color="grey" fontSize="10px" >{params.row.col3}</Typography>)
    } },
  { field: 'col4', headerName: 'Parent name', width: 150,renderCell:(params)=>{
    return(
      
    <Typography padding={1}  fontSize="12px" >{params.row.col4}</Typography>)
    } },
  { field: 'col5', headerName: 'city', width: 90 },
  { field: 'download', headerName: 'Contact', width: 100,renderCell:(params)=>{
    return( <Stack direction="row" spacing={2}>
      <Link href="#" sx={{padding:"5px",backgroundColor:{color1} ,color:{color2},borderRadius:"25px"}}><CallIcon sx={{fontSize:"15px"}}/></Link>
      <Link href="#" sx={{padding:"5px",backgroundColor:{color1} ,color:{color2},borderRadius:"25px"}}><MailOutlineIcon sx={{fontSize:"15px"}}/></Link>
    </Stack>)
    } },
  { field: 'col7', headerName: 'Grade', width: 60,headerAlign:'center', renderCell:(params)=>{
    return(
      
    <Typography padding={1} color="warning" borderRadius="20px" fontWeight="bold" fontSize="12px" >{params.row.col7}</Typography>)
    }},
  { field: 'col8', headerName: 'Action',headerAlign:'center', width: 60,renderCell:()=><Stack direction="row" spacing={2}><MoreHorizIcon/></Stack>  },
 
];
const columnGroupingModel = [
  {
    groupId: 'internal data',
    children: [{ field: 'id' }],
  },
  {
    groupId: 'character',
    children: [
      {
        groupId: 'naming',
        children: [{ field: 'lastName' }, { field: 'firstName' }],
      },
      { field: 'age' },
    ],
  },
]



export const Student = () => {
  return (
   <Box sx={{ height: 400, width:"70vw",padding:"50px" }}>
   
        <DataGrid
         columnGroupingModel={columnGroupingModel}
  experimentalFeatures={{ columnGrouping: true,newEditingApi:true }}
  rows={rows}
  columns={columns}
  rowsPerPageOptions={[5,10,20]}
  pageSize={5}
  onPageSizeChange={10}
  checkboxSelection
  disableSelectionOnClick
 
 
  
  sx={{
    boxShadow: 2,
    backgroundColor:"white",
    color:"primary.main",
    border: 0,
    borderRadius:"15px",
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.dark',
    },
  }}
  
/>

        </Box>
    
  )
}


export const Chat = () => {
  return (
    <center><h1>Chat</h1> </center>
  )
}
export const Teachers = () => {
  return (
    <center><h1>Teachers</h1> </center>
  )
}

export const Events = () => {
  return (
    <center><h1>Events</h1> </center>
  )
}
export const Finance = () => {
  return (
    <center><h1>Finance</h1> </center>
  )
}
export const Latestactivity = () => {
  return (
    <center><h1>Latestactivity</h1> </center>
  )
}
export const Users = () => {
  return (
    <center><h1>Users</h1> </center>
  )
}
export const Dashboard = () => {
  return (
    <center><h1>Dashboard</h1> </center>
  )
}
export const Food = () => {
  return (
    <center><h1>Food</h1> </center>
  )
}