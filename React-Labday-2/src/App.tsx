import Login from './pages/Login'
import { LoginContextProvider } from './Context/LoginContextProvider'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import TodosLayout from './pages/Todos/TodosLayout'
import TodosList from './pages/Todos/TodosList'

const App = () => {
  return (
    <LoginContextProvider>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route/>
            <Route path='/Todos' element={<TodosLayout/>}>
              <Route index element={<TodosList/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  )
}

export default App
