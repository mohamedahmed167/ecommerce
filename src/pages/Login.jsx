import React, { useState } from 'react'
import "./login.css"
function Login() {
  const [formInput, setForminput] = useState({
    name: "",
    email: "",
    password: "",
    isLogin: false,
  })
  return (
    <div className="form-box">
      <form className='form'>
        <span className='title'> sign up </span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input type="text" className="input" placeholder="Full Name"
            onChange={(e) => {
              setForminput({ ...formInput, name: e.target.value })
            }}
          />
          <input type="email" className="input" placeholder="Email"
            onChange={(e) => {
              setForminput({ ...formInput, email: e.target.value })
            }}
          />
          <input type="password" className="input" placeholder="Password"
            onChange={(e) => {
              setForminput({ ...formInput, password: e.target.value })
            }}
          />
        </div>
        <button onClick={(e) => {
          e.preventDefault()
          setForminput({ ...formInput, isLogin: true })
        }} disabled={true} className='not-active'>sign up</button>
      </form>
    </div>
  )
}
export default Login
