
 import { DataGrid} from '@mui/x-data-grid';
 import {Box,Stack,Avatar,Typography,Link} from '@mui/material'
 import CallIcon from '@mui/icons-material/Call';
 import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 import {indigo} from "@mui/material/colors"
 const color=indigo[50];
 const rows = [
  { id: 1, col1: 'Samantha william', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Amanda William" ,col5:"jakarta",col7:"VIIA"},
  { id: 2, col1: 'Tony Soap', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Geaorge Soap" ,col5:"jakarta",col7:"VIIB"},
  { id: 3, col1: 'Karen Hope', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Shai Hope" ,col5:"jakarta",col7:"VIIC"},
  { id: 4, col1: 'Jordan Nico', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Lauren Nico" ,col5:"jakarta",col7:"VIID"},
  { id: 5, col1: 'Nadila Adja', col2: '#123456789' ,col3:'March 25,2021' ,col4:"Shamila adja" ,col5:"jakarta",col7:"VIIE"},

 

];

const columns = [
  
  { field: 'col1', headerName: 'Name', width: 150,renderCell:(params)=>{
    return(<Box display="flex">
      <Avatar src={{width:10,height:10}}/>
    <Typography padding={1} fontWeight="bold" fontSize="12px" >{params.row.col1}</Typography></Box>)
    }},
  { field: 'col2', headerName: 'id', width: 120 ,renderCell:(params)=>{
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
      <Link href="#" sx={{padding:"5px",backgroundColor:{color},borderRadius:"25px"}}><CallIcon sx={{fontSize:"15px"}}/></Link>
      <Link href="#" sx={{padding:"5px",backgroundColor:{color},borderRadius:"25px"}}><MailOutlineIcon sx={{fontSize:"15px"}}/></Link>
    </Stack>)
    } },
  { field: 'col7', headerName: 'Grade', width: 60,headerAlign:'center', renderCell:(params)=>{
    return(
      
    <Typography padding={1} bgcolor="orangered" color="warning" borderRadius="20px" fontWeight="bold" fontSize="12px" >{params.row.col7}</Typography>)
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



const Student = () => {
  return (
   <Box sx={{ height: 400, width:"70vw",padding:"50px" }}>
   
        <DataGrid
         columnGroupingModel={columnGroupingModel}
  experimentalFeatures={{ columnGrouping: true }}
  rows={rows}
  columns={columns}
  checkboxSelection
  disableSelectionOnClick
  rowsPerPageOptions={[5,10,20]}
  pageSize={5}
  onPageSizeChange={10}
  
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

export default Student