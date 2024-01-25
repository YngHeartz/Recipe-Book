//main Imports start
import { useState } from 'react'
//main Imports End

//component Import start
import RecipeInput from './components/recipeinput'
// import RecipeContainer from './components/recipecontainer'
import CardDefault from './components/cardtester'
import Navbar from './components/navbar'
//component Import End

//style imports
import './App.css'

//style imports end

function App() {

  return (
    <>
      <Navbar />
      <RecipeInput />
      {/* <CardDefault /> */}

      {/* <RecipeContainer /> */}
    </>
  )
}

export default App
