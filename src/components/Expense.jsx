import React from 'react'

const Expense = ({amount,date,time,category}) => {
  return (
    <div className='flex justify-around p-5 text-xl align-middle m-1 text-white bg-black'>
      <h1>{amount}</h1>
      <div>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <img src={`src/assets/${category}.png`} alt="" width="56px" />
    </div>
  )
}

export default Expense
