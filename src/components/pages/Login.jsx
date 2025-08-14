import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"
const Login=(props)=>{
    const users=props.users
    const setusers=props.setusers
    const [entereduser,setentereduser]=useState("")
    const [enteredpass, setenteredpass]=useState("")
    var userfound=false
    const navigate=useNavigate()
    const [registereduser,setRegistereduser]=useState(true)
    const handleUsername=(evt)=>{
setentereduser(evt.target.value);
    }
    const handlePass=(evt)=>{
setenteredpass(evt.target.value);
    }
    const handleLogin=()=>{
        users.forEach(function(item){
            if(item.username === entereduser && item.password === enteredpass){
                console.log("login succesful"); 
                userfound=true 
              navigate("/Landing", {state:{user:entereduser}})  
            }
            if(userfound === false){
                console.log("login failed");
                setRegistereduser(false)
            }
        })
    }
   
    return<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {registereduser?  <p className="text-2xl font-medium">I'll help you manage your activities after you login :)</p> : <p className="text-red-500">Please sign up before Login!</p>}
       

        <div className="flex flex-col gap-3 my-2">
<input type="text" className="border-black p-1 bg-transparent border rounded-md w-52" placeholder="username" onChange={handleUsername} value={entereduser}/>
<input type="text" className="border-black p-1 bg-transparent border rounded-md w-52" placeholder="Password" onChange={handlePass} value={enteredpass} />
<button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={handleLogin}>Login</button>
<p>Don't have an account ? <Link to={"/signup"} className="underline">SignUp</Link></p>
        </div>
        </div>
    </div>
    
}
export default Login