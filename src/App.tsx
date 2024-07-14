import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);
  const [multiple, setMultiple] = useState(1);

  const updateNumber = () => {
    setClicks(clicks + 1 * (multiple));
  }
  const updateMultiple = () => {
    if (clicks > 5) {
      setMultiple(multiple+1);
      setClicks(clicks-5)
    }
  }
  const autoClicker = () => {
    if (clicks > 5) {
      setMultiple(multiple+1);
      setClicks(clicks-5)
    }
  }

  return (
    <>
      <div className='flex bg-blue-200 h-screen'>
        <div className='h-[100vh] w-[40vw] '>
          <div className='flex flex-col items-center border-4 bg-blue-300 border-blue-400 rounded-md h-[100vh]'>
            <button className=' h-[50%] w-[50%]' onClick={updateNumber}>
              <img className='animate-spin' src="../src/assets/—Pngtree—chocolate chip cookie clipart cartoon_12151086.png" alt='cookie'/>
            </button>
            <div className='border-blue-400 border-t-4 h-[50vh] w-[40vw] items-center justify-center flex flex-col'>
              <h1 className='text-9xl text-white absolute'>${clicks}</h1>
              <h1 className='text-7xl mt-[30vh] text-white'>clicks</h1>
            </div>
          </div>

        </div>

        <div className='flex absolute h-[100vh] w-[60vw] right-0 items-center justify-center'>
          <button className=' rounded-md shadow-md shadow-blue-400 h-[25vh] w-[20vw]' onClick={updateMultiple}>
            <h1 className='text-white text-5xl mb-[2.5vh]'>Costs $5</h1>
            <h2 className='text-3xl '>Multiplies clicks</h2>
            <h3 className=''>current multiple is {multiple}</h3>
          </button>
        </div>


      </div>
    </>
  )
}

export default App
