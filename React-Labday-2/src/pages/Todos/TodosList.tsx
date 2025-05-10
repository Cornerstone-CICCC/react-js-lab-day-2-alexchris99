import { UseLogin } from "../../Context/UseLogin"
import Login from "../Login"
import {  useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import type { Task } from "../../Types/Task"
import {v4 as uuidv4} from "uuid"
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast"


const TodosList = () => {

    const {login, setLogin} = UseLogin()
    const [tasks, setTasks] = useState<Task[]>([])
    const [todo, setTodo] = useState<string>("")


    const handleLogout = () =>{
        setLogin({
            name: "",
            logedIn: false
        })
        toast.error(`${login.name} is logout see you soon!`)
    }
    

    const createTask = (e: ChangeEvent<HTMLInputElement>)=>{
        setTodo(e.target.value)     
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       setTasks(prev=>[
            ...prev,
            {
                id: uuidv4(),
                task: todo
            }
       ])
       toast.success("New task added")
       setTodo("")
        
    }

    const handleDelete = (id: string)=>{
        setTasks(prev => prev.filter(task => task.id !== id))
        toast.error("Task deleted")
    }

    if(login.logedIn === false) return <Login/>
  return (

    <div className="bg-gray-600 w-auto rounded-2xl">
        <div className="flex p-8 gap-2">
            <h1 className="text-2xl font-bold">Welcome,{login.name}!</h1>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
        <div>
            <ul className="flex flex-col justify-around m-4">
                {tasks.map(tasks =>
                    <li className="flex gap-4 bg-gray-500 w-full justify-around align-baseline p-2 items-center m-2" key={tasks.id}>
                        <p>{tasks.task}</p>
                        <button type="button" onClick={()=>handleDelete(tasks.id)}>
                            <FaTrash/>
                        </button>
                    </li>
                )}
            </ul>
        </div>
        <p>Have a great and productive day!</p>
        <form  className="flex gap-2 p-4 justify-around" onSubmit={handleSubmit}>
            <input className="bg-gray-700 ps-4" type="text" value={todo} onChange={createTask}/>
            <button type="submit">Add a task</button>
        </form>
    </div>
  )
}

export default TodosList