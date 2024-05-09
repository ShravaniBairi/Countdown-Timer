
import './App.css';

import React, {useState, useEffect} from 'react';




function App() {

  const [targetDatetime, setTargetDatetime] = useState()
  const [submittedDatetime, setSubmittedDatetime] = useState()
  const [resultMessage, setResultMessage] = useState('')
    const [resultTime, setResultTime] = useState({ resultTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }})
  //const [timerStatus, setTimerStatus] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDatetime(targetDatetime)
    //setTimerStatus(true)
  }
 

  
  

  useEffect(()=>{
    if(submittedDatetime !== undefined) {
    const UpdateTimer = () => {
      const presentTime = new Date().getTime();
      const targetTime = new Date(submittedDatetime).getTime();
      const countdownTime = targetTime-presentTime;
      const days = Math.floor(countdownTime / (1000*60*60*24))
      if(countdownTime < 0 ) {
          setResultMessage('Target Reached')
      }
      else if (days > 99){
          setResultMessage('Select time less than 100 Days')
      }
      else 
      {
          const total_seconds= Math.floor(countdownTime / 1000)
          const total_minutes = Math.floor(total_seconds/60)
          const total_hours = Math.floor(total_minutes/60)
  
          const R_hours = total_hours%24
          const R_minutes = total_minutes%60
          const R_seconds = total_seconds%60 
  
          setResultTime({
              days: days,
              hours: R_hours,
              minutes: R_minutes,
              seconds: R_seconds
          })
      }
    }

    const timerId = setInterval(()=>{UpdateTimer(submittedDatetime, setResultMessage, setResultTime)}, 1000)
  

    return () => clearInterval(timerId)    
  }

  } ,[submittedDatetime])
   

    
    
    
  

  return (
    <div className="App">
      <h1 className='flex flex-wrap justify-center font-bold  xl:px-60 sm:px-10 sm:mx-10   px-4'>Count Down Timer</h1>

      <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap  justify-center  xl:px-60 sm:px-10 sm:mx-10   px-4'>
        <input className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-purple-400  via-blue-200 to-blue-300 ' type="datetime-local"
        value = {targetDatetime}
        onChange = {(e) => setTargetDatetime(e.target.value)}
        />
        <button className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-red-400  via-pink-200 to-red-300 ' type='submit'>Submit</button>
        </div>


      </form>

     

      

       <div className= " text-center text-blue-900 font-bold sm:text-4xl text-3xl" >{resultMessage} </div> 
       <div className='flex flex-wrap  justify-center  xl:px-60 sm:px-10 sm:mx-10   px-4'>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-red-400  via-pink-200 to-red-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.days}</h1>
            <h1 className=' text-center text-xl'>DAYS</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-red-400  via-pink-200 to-red-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.hours}</h1>
            <h1 className=' text-center text-xl'>HOURS</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-red-400  via-pink-200 to-red-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.minutes}</h1>
            <h1 className=' text-center text-xl'>MINUTES</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-bl  from-red-400  via-pink-200 to-red-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.seconds}</h1>
            <h1 className=' text-center text-xl'>SECONDS</h1>
        </div>
    </div>


     
      
    </div>
  );
}

export default App;
