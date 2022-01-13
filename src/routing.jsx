   
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Home from "./views/Home";
import Login from "./components/LogIn/Login";
import Register from "./components/LogIn/Register";
import Event from "./components/Events/Event";
import React from "react"

const Routing = () => {
  return (
    <Router> 
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event/:name" element={<Event />} />
        </Routes>
      </React.Fragment>
    </Router>
  )
}
export default Routing