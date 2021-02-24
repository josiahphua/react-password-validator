import React, {useState} from 'react'
import Validator from './Validator'

export default function App() {
  
  const [state, setstate] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    valid: true
  })

  return (
    <Validator state={state} setstate={setstate} />
  )
}