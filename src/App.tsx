import Reacr, { useState } from 'react'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment } from './store/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  return (
    <>
      <button
        className='
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    '>
        Click me
      </button>

      <button onClick={handleIncrementClick}>+</button>
      <div>{count}</div>
      <button onClick={handleDecrementClick}>-</button>
    </>
  )
}

export default App
