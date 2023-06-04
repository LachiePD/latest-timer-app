'use client';
import {useContext} from 'react';
import {PlayingContext } from './TimerContext.js';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const TimerButton = () =>{
	const {running, runningDispatch} = useContext(PlayingContext);
	console.log(running)

	const icon = !running ?  <PlayArrowIcon sx={{width:'80%', height:'80%'}}/>
		: 
		<PauseIcon sx={{width:'80%', height:'80%'}}/>
	return(
	   <>
          <Fab sx={{height:'140px', width:'140px', display:'flex'}}size="large"      color='success.light' onClick={()=> runningDispatch({type:'toggle'})}>
		{icon}
		</Fab> 
		</>
	);


}
export default TimerButton;
