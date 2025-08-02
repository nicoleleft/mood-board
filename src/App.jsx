import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h4 className='font-bold'>moodboard.it</h4>
        <div id='buttons' className='flex flex-row justify-evenly items-center m-4'>
          <button className='bg-pink-300 text-white p-2 rounded'>Add Image</button>
          <button className='bg-pink-300 text-white p-2 rounded'>Add Text</button>
          <button className='bg-pink-300 text-white p-2 rounded'>Download Board</button>
        </div>
        <div id='board-area' className='flex flex-col items-center justify-center bg-pink-100 h-[600px] rounded-lg border border-pink-300 p-4 m-10'>

        </div>
      </div>
    </>
  )
}

export default App
