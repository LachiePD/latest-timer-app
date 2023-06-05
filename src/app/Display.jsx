'use client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import {timeReducer} from './reducer.js';
import {useState, useReducer,useContext} from 'react';
import {PlayingContext, TimeContext} from './TimerContext.js';


const Display = () =>{
	const {time, timeDispatch} = useContext(TimeContext)
	const {running, runningDispatch} = useContext(PlayingContext)
	const handleChange = (chrono, value) =>{
		timeDispatch({
			type: 'setTime',
			chronometry:chrono,
			value:value
		})

	}


	const finished = () =>{


		   let audio = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_9b106fb911.mp3")
                        audio.play();
		
	}
	if(running){

		const intervalId = setTimeout(()=>{
			switch (true) {
  case time.milliseconds === 0 && time.seconds === 0 && time.minutes === 0 && time.hours === 0:
					finished();
    // Timer has reached 00:00:00:00
    console.log('Timer reached 00:00:00:00');
    break;

  case time.milliseconds === 0 && time.seconds === 0 && time.minutes === 0:
    // Timer reached 00:00:00, decrement hours
    timeDispatch({ type: 'decrement', chronometry: 'hours' });
					timeDispatch({value:'setTime', chronometry:'minutes', value:'59'});
    break;

  case time.milliseconds === 0 && time.seconds === 0:
    // Timer reached 00:00, decrement minutes
    timeDispatch({ type: 'decrement', chronometry: 'minutes' });
					timeDispatch({type:'setTime', chronometry:'seconds', value:'59'});
    break;

  case time.milliseconds === 0:
    // Timer reached 00, decrement seconds
    timeDispatch({ type: 'decrement', chronometry: 'seconds' });
					timeDispatch({type:'setTime', chronometry:'milliseconds', value:'99'});
    break;

  default:
    // Timer is still running, continue decrementing milliseconds
    timeDispatch({ type: 'decrement', chronometry: 'milliseconds' });
    break;
}
	},10)
	
}
	const interactiveGrid = Object.keys(time).map((chrono, index) =>{

		if(chrono === 'milliseconds'){return}
		return(
			<InteractiveGridItem handleChange={handleChange}
			chronometry={chrono}
			key={index}/>
		)
	})

	return(
		<>
		{running ?
			(
				<RunningDisplay />
			)
			:
			(
				<InteractiveDisplay>
				{interactiveGrid}
				</InteractiveDisplay>
			)}
		</>


	);


}

const InteractiveDisplay = ({children}) =>{

	return(
		<Box sx={{borderRadius:'5px' , backgroundColor:'#b99cb3', marginTop:'5px', width:'90%', height:'30%'}} >
		<Grid container sx={{height:'100%', padding:'9px'}} >
		{children}
		</Grid>
		</Box>


	);

}
const InteractiveGridItem = ({chronometry, handleChange})=>{

	return(
		<Grid item={true} xs={4} sx={{display:'flex', alignItems:'center'}}>
		
		<TextField sx={{width:'80%'}} label={chronometry} type="number" onChange={(e)=>handleChange(chronometry, e.target.value)} id='outlined-number'/>
		</Grid>
	)


}
const TimeValue = ({children})=>{


	return(
  <Typography  variant='h2' sx={{width:'25%', height:'100%', justifyContent:'center',textAlign:'center', textJustify:'center', display:'flex', alignItems:'center'}}>
		{children}
		</Typography>
	);


}
const RunningDisplay = ()=>{
	const {time, timeDispatch} = useContext(TimeContext);

	const timeValues = Object.entries(time).map(([key,value])=>{

		if (key ==='milliseconds'){return}
		if(key ==='seconds'){return <TimeValue>{value} {time.milliseconds}</TimeValue>}

		return(
			<TimeValue>
			{value}
			</TimeValue>
		)
	})

	return(
		<Box sx={{borderRadius:'5px' ,display:'flex', flexDirection:'row', backgroundColor:'#b99cb3', marginTop:'5px', width:'90%', height:'30%', justifyContent:'center', alignItems:'center'}} >
		{timeValues}
		</Box>
	);
}
export default Display;
