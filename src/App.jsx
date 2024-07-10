import { useState } from 'react'

import './App.css'
import { nanoid } from 'nanoid'
import BoxForm from './components/BoxForm/BoxForm'
import Counter from './components/Counter/Counter'

function App() {
const [users, setUser] = useState()
const addUsers = (formData) => {
const finalUsers = {
  ...formData,
  id: nanoid()
}
setUser((PrevState) => [...PrevState, finalUsers])
}
  return (
    <>
     <BoxForm />
     <Counter  />
    </>
  )
}

export default App
