import React, { useState } from 'react'
import Card from './companet/Card'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [lastname, setUserlastname] = useState('')
  const [phone, setUserphonenumder] = useState('')

  const [users, setUser] = useState([])

  function handelChangeName(event) {
    setUsername(event.target.value)
  }

  function handelChangelastname(event) {
    setUserlastname(event.target.value)
  }

  function handelChangephon(event) {
    setUserphonenumder(event.target.value)
  }

  function handelSave(event) {
    event.preventDefault()

    const userInfo = {
      username: username,
      lastname: lastname,
      phone: phone,
      id: Date.now()
    }

    let copied = [...users]
    copied.push(userInfo)
    setUser(copied)

    setUsername('')
    setUserlastname('')
    setUserphonenumder('')
  }

  return (
    <div className='hero_box'>
      <div className='container'>
        <form action="" className='usersInfo'>
          <input onChange={handelChangeName} value={username} type="text" placeholder='firstName' className='firstName input' />
          <input onChange={handelChangelastname} value={lastname} type="text" placeholder='lastName' className='lastName input' />
          <input onChange={handelChangephon} value={phone} type="number" placeholder='phone: +998' className='phone input' />
          <button className='btn' onClick={handelSave}> SAVE </button>
        </form>

        <div className='users_card'>
          {users.length > 0 && users.map(function (element, index) {
            return (
              <Card card={element} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
