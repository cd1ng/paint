import Reacr, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment } from './store/counterSlice'

import Edit from './pages/edit'
import List from './pages/list'
import Login from './pages/login'

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/login' element={<Login />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
