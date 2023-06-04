export const timeReducer = (time, action) =>{
	switch(action.type){
		case"decrement":{
		return(
			{...time, 
				[action.chronometry]: (time[action.chronometry] -1)
			}
		);
		}
		case"setTime":{
			return(
				{...time,
					[action.chronometry]:[action.value],
				}
			);
		}
	}
}

export const runningReducer = (running, action) =>{
	
	switch(action.type){
		case 'toggle':{
			console.log(running);
			return(!running)
			break;
		}
	}


}
