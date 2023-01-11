import React from 'react'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import SignUp from './pages/signup'
import ForgotPass from './pages/forgotpass'
import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  const getData = async () =>{
    const res = await axios.get("http://localhost:8000/links");
    setData(res.data.data)
  }
  useEffect(()=>{
    getData();
  })
  return (
   <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpass" element={<ForgotPass />}></Route>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App