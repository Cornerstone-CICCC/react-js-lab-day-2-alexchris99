import type {ChangeEvent, FormEvent } from "react"
import { UseLogin } from "../Context/UseLogin"
import TodosList from "./Todos/TodosList"
import toast from "react-hot-toast"

const Login = () => {
    const {login, setLogin} = UseLogin()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLogin({
            name: login.name,
            logedIn: true
        })
        toast.success(`Welcome back ${login.name}`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setLogin({
            name: e.target.value,
            logedIn: false
        })
    }
    if(login.logedIn === true) return <TodosList/>

  return (
    <div className="bg-gray-600 w-auto rounded-2xl">
        <div className="p-8">
            <h1 className="text-2xl font-bold text-left">Hi. What's your name?</h1>
            <form className="flex gap-2 mt-4" onSubmit={handleFormSubmit}>
                <label htmlFor="">
                    <input className="bg-gray-700 h-10 w-100 ps-4" type="text"  onChange={handleChange}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login