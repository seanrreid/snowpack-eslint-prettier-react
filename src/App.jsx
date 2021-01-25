import React from 'react'
import './App.css'
import { Button } from './components'

const App = () => {
  return (
    <section className="App">
      <h1>Snowpack React</h1>
      <p>
        A starter template for using React, Prettier, ESLint, Jest/RTL compiled using Snowpack.
        Simple and easy.
      </p>
      <div className="button-row">
      <Button as="tertiary">Cancel</Button>
      <Button as="primary">Let's Go!</Button>
      </div>
    </section>
  )
}

export default App
