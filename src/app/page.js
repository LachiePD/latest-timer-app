'use client';
import TimerButton from './TimerButton';
import Display from './Display.jsx';
import Box from '@mui/material/Box';
import {TimeContext} from './TimerContext';
 const Home =()=> {


	return (
	  <Box p={2}  sx={{justifyContent:'center',display:'flex', borderRadius: '20px', border:'1px solid #b99cb3',backgroundColor:'none', height:'70vh', width:'70vw', flexDirection:'row', flexWrap:'wrap'}} >
	  <Display/>
	  <TimerButton/>
	  </Box>
  )
}
export default Home
