import { useState } from "react"
const AddToDoForm=(props)=>{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    const [newactivity,setNewActivity]=useState("")
    const handleChange=(evt)=>{
setNewActivity(evt.target.value)
    }
    const addActivity=()=>{
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewActivity("")
    }
    return <>
    <div>
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent" placeholder="Next Activity?" />
        <button onClick={addActivity} className="bg-black text-white px-5 py-1 ml-2">Add</button>
    </div>
    </>
}
export default AddToDoForm