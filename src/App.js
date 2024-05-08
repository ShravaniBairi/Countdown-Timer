
import './App.css';

import React, {useState, useEffect} from 'react';



function App() {

  const [targetDatetime, setTargetDatetime] = useState()
  const [submittedDatetime, setSubmittedDatetime] = useState()
  //const [timerStatus, setTimerStatus] = useState(false)
  const [output, setOutput] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDatetime(targetDatetime)
    //setTimerStatus(true)
  }
 

  useEffect(()=>{
   
   
    if(submittedDatetime !== undefined) {

      const updateTimer = () => {

      const presentTime = new Date().getTime();
      const target = new Date(submittedDatetime).getTime()
      const countdownTime = target-presentTime
      const days = Math.floor(countdownTime/(1000*60*60*24));

      if(days > 99 ) {
        return setOutput("select less than 99 days")
      }
      else if(countdownTime <= 0) {
        return setOutput("Reached Target");

      }
      else{
      

        let total_seconds = Math.floor(countdownTime/1000);
        let total_minutes = Math.floor(total_seconds/60);
        let total_hours = Math.floor(total_minutes/60);
        let total_days = Math.floor(total_hours/24);

        let seconds = total_seconds%60
        let minutes = total_minutes % 60
        let hours = total_hours % 24

        return setOutput(`${total_days}:${hours}:${minutes}:${seconds}`)


      }
    }
    
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
   

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

      

      <div className= " text-center text-blue-900 font-bold sm:text-4xl text-3xl" >{output}</div>

     
      
    </div>
  );
}

export default App;
