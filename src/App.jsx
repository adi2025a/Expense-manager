import React from 'react';
import Navbar from './components/Navbar';
import ExpenseBox from './components/ExpenseBox';

function App() {

  return (
    <>
      <div className='flex flex-col bg-black w-full h-[100vh]'>
        <Navbar/>
        <ExpenseBox/>
      </div>
    </>
  )
}

export default App

