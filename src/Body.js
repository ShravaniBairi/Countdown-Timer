
import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const Body = () => {

    const [targetDatetime, setTargetDatetime] = useState()
    const [submittedDatetime, setSubmittedDatetime] = useState()
    const [timerAction, setTimerAction] = useState(false)
    const [buttonValue, setButtonValue] = useState('Start Countdown')
    
    const [result, setResult] = useState({ resultTime:{
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    },
    resultMessage: ''
})

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(timerAction){
            setButtonValue('Start Countdown')
            setTimerAction(false)
        }
        else {
            setButtonValue('Stop Countdown')
            setTimerAction(true)
            setSubmittedDatetime(targetDatetime)
        }
     

      
      
        
       
        
    }

    useEffect( ()=>{
        let timerId
        if(submittedDatetime !== undefined && timerAction === true) {

        const updateTimer = () => { 

            

            const presentTime = new Date().getTime()
            const TargetTime = new Date(submittedDatetime).getTime()
            const countdownValue = TargetTime - presentTime;
            console.log(countdownValue)

            const days = Math.floor(countdownValue / (1000*60*60*24))
      if(countdownValue < 0 ) {
          setResult({resultMessage: 'Target Reached',

          })
          setTimerAction(false)
          setButtonValue('Start Countdown')
          return () => clearInterval(timerId)
      }
      else if (days > 99){
          setResult({resultMessage: 'Select less than 100 days'})
          setTimerAction(false)
          setButtonValue('Start Countdown')
          return () => clearInterval(timerId)
      }
      else 
      {
          const total_seconds= Math.floor(countdownValue / 1000)
          const total_minutes = Math.floor(total_seconds/60)
          const total_hours = Math.floor(total_minutes/60)
  
          const R_hours = total_hours%24
          const R_minutes = total_minutes%60
          const R_seconds = total_seconds%60 
  
          setResult({resultTime : {
              days: days,
              hours: R_hours,
              minutes: R_minutes,
              seconds: R_seconds
          }})
      }



        }

       
        timerId = setInterval(()=>{updateTimer(submittedDatetime, setResult)}, 1000)

       
   }

   return () => clearInterval(timerId)
   



    })
    
 
    





    return(
        <div className= "bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400 flex flex-col items-center justify-center min-h-screen">
            <h1 className='flex flex-wrap justify-center font-bold sm:text-4xl text-3xl xl:px-60 sm:px-10 sm:mx-10   p-4' >Count Down Timer</h1>
            <form onSubmit={handleSubmit} className=' flex flex-col items-center  xl:px-60 sm:px-10 sm:mx-10   px-4'>
                <input className='m-4' type='datetime-local'
                value = {targetDatetime}
                onChange = {(e)=> setTargetDatetime(e.target.value)}
                 />

                <button className= " text-center font-serif  font-bold  text-sm sm:text-md bg-gradient-to-b p-2 m-4 rounded-md from-green-400  via-green-100 to-green-400 " type='submit' >{buttonValue}</button>
               
            </form>

            <Timer {...result } />




        </div>
    )
}

export default Body

