import React from 'react'

const Timer = ({resultMessage, resultTime}) => {

console.log(resultMessage)
console.log(resultTime)

    if(resultMessage !== '' && resultMessage !== undefined ) return (
        <div className= " text-center text-blue-900 font-bold sm:text-4xl text-3xl p-4" >{resultMessage} </div> 
    )
 else  return (
    <div>
        
       <div className='flex flex-wrap  justify-center  xl:px-60 sm:px-10 sm:mx-10   px-4'>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-b  from-blue-400  via-blue-200 to-blue-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.days}</h1>
            <h1 className=' text-center text-xl'>DAYS</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-b  from-blue-400  via-blue-200 to-blue-300'>
            <h1 className=' text-center text-4xl'>{resultTime?.hours}</h1>
            <h1 className=' text-center text-xl'>HOURS</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-b  from-blue-400  via-blue-200 to-blue-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.minutes}</h1>
            <h1 className=' text-center text-xl'>MINUTES</h1>
        </div>
        <div className='m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2   rounded-lg  shadow-lg  bg-gradient-to-b  from-blue-400  via-blue-200 to-blue-300 '>
            <h1 className=' text-center text-4xl'>{resultTime?.seconds}</h1>
            <h1 className=' text-center text-xl'>SECONDS</h1>
        </div>
    </div>


    </div>
  )
}

export default Timer