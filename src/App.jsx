import React, {useState, useEffect} from 'react'
import Artist from './Artist'
import Albums from './Albums'
import './app.css'
import SmashForm from './SmashForm'

const App = () => {
  const body = document.querySelector("body");
  useEffect(() => {
    const genRanHex = size => [...Array(size)]
      .map(() => Math.floor(Math.random() * 16)
      .toString(16))
      .join('');

    body.style.backgroundColor = `#${genRanHex(6)}`

  
  }, [])
  
  return (
    <>
    <Artist/>
    <Albums/>
    <SmashForm/>
    </>
  )
}

export default App
