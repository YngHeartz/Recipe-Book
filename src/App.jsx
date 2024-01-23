//main Imports start
import { useState } from 'react'
//main Imports End

//component Import start
import RecipeInput from './components/recipeinput'
import Header from './components/header'
//component Import End

//style imports
import './App.css'

//style imports end

function App() {

  return (
    <>
      <Header />
      <RecipeInput />
    </>
  )
}

export default App
