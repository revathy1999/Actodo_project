import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
const SignUp=(props)=>{
    const users=props.users
    const setusers=props.setusers
const navigate=useNavigate()
    const [entereduser,setentereduser]=useState("")
        const [enteredpass, setenteredpass]=useState("")
    
        const [registereduser,setRegistereduser]=useState(true)
        const handleUsername=(evt)=>{
    setentereduser(evt.target.value);
        }
        const handlePass=(evt)=>{
    setenteredpass(evt.target.value);
        }
        const addUser=()=>{
            setusers([...users,{username:entereduser,password:enteredpass}])
            navigate("/")
        }
    return <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p className="text-2xl font-medium">You can Sign Up here :)</p>

        <div className="flex flex-col gap-3 my-2">
<input type="text" className="border-black p-1 bg-transparent border rounded-md w-52" placeholder="username" onChange={handleUsername} />
<input type="text" className="border-black p-1 bg-transparent border rounded-md w-52" placeholder="Password" onChange={handlePass}/>
<input type="text" className="border-black p-1 bg-transparent border rounded-md w-52" placeholder="Confirm Password" />
<button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
<p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
        </div>
        </div>
    </div>
}
export default SignUp