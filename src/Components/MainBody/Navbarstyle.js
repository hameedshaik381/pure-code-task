import {makeStyles} from '@mui/material'

export const useNavStyles = makeStyles({
   title:{
    color:"#3f50b5" ,fontWeight:"bold",marginX:"30px"
   },
   paper:{  display: 'flex', marginX:"30px",alignItems: 'center', width: 240 ,borderRadius:"20px"},
   inputbase:{ ml: 1, flex: 1 },
   btn:{
    borderRadius:"20px"
   }
})
export const useBrandstyle = makeStyles({
  logo:{
    color:"white" ,fontWeight:"bold" ,padding:"10px",fontSize:"20px",height:"20px" ,backgroundColor:"orange",borderRadius:"10px", justifyContent:"center",marginTop:"8px",textAlign:"center"

  }, title:{
    color:"white" ,fontWeight:"bold" ,padding:"15px",fontSize:"20px"
  },brandBox:{p:2 ,display:"flex", marginX:"30px"}
})