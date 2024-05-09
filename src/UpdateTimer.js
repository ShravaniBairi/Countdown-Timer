import React, { useState } from 'react'
const UpdateTimer = ({submittedDatetime}) => {

    const [resultMessage, setResultMessage] = useState({message: ''})
    const [resultTime, setResultTime] = useState({ resultTime: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    }})

    const presentTime = new Date().getTime();
    const targetTime = new Date(submittedDatetime).getTime();
    const countdownTime = targetTime-presentTime;
    const days = Math.flooor(countdownTime / (1000*60*60*24))
    if(countdownTime < 0 ) {
        setResultMessage({message: 'Target Reached'})
    }
    else if (days > 99){
        setResultMessage({message: 'Select time less than 100 Days'})
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




  if(countdownTime<0 || days > 90) return (
    <div className= " text-center text-blue-900 font-bold sm:text-4xl text-3xl">{resultMessage?.message}</div>
  )
  else return(
    <div>
        <div>
            <h1>{resultTime?.days}</h1>
            <h1>DAYS</h1>
        </div>
        <div>
            <h1>{resultTime?.hours}</h1>
            <h1>HOURS</h1>
        </div>
        <div>
            <h1>{resultTime?.minutes}</h1>
            <h1>MINUTES</h1>
        </div>
        <div>
            <h1>{resultTime?.seconds}</h1>
            <h1>SECONDS</h1>
        </div>
    </div>
  )
}

export default UpdateTimer;
