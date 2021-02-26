import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Route } from "react-router-dom"
import { Login } from "./components/Login/Login"
import { Home } from "./components/Home/Home"

import Register from "./components/Register/Register"

function App() {
  return (
    <div className="App">
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  )
}

export default App
