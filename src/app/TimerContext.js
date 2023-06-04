'use client';
import {createContext, useReducer} from 'react';
import {timeReducer, runningReducer} from './reducer.js';

export const PlayingContext= createContext(null);
export const TimeContext = createContext(null);



const  AppContext = ({children})=>{
	const [time, timeDispatch] = useReducer(timeReducer, {hours:0, minutes:0, seconds:0, milliseconds:0});
	const [running, runningDispatch] = useReducer(runningReducer, false);

	return(
		<TimeContext.Provider value={{time, timeDispatch}}>
		<PlayingContext.Provider value={{running, runningDispatch}}>
		{children}
		</PlayingContext.Provider>
		</TimeContext.Provider>
	)
}
export default AppContext;
