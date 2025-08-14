import { useState } from "react";
import "./App.css";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Landing from "./components/pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [users, setusers] = useState([
    {
      username: "Revathi",
      password: "123",
    },
  ]);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
        <Route path="/signup" element={<SignUp users={users} setusers={setusers} />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
