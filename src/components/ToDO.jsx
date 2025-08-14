import ToDoList from "./ToDOList"
import AddToDoForm from "./AddToDOForm"
import { useState } from "react"
const ToDO=()=>{
        const [activityArr, setActivityArr]=useState([
{
    id:1,
    activity:"Go for a walk"
},
{
id:2,
activity:"Have Breakfast"
}
    ])
    return <>
    <div className="flex gap-5 flex-wrap">
    <AddToDoForm activityArr={activityArr} setActivityArr={setActivityArr} />
    <ToDoList activityArr={activityArr} setActivityArr={setActivityArr}/>
    </div>
    </>
}
export default ToDO