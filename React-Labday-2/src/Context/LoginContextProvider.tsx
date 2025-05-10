import { useState, type ReactNode } from "react";
import {LoginContext} from "./LoginContext"
import type { User } from "../Types/User";

export const LoginContextProvider = ({children}: {children: ReactNode})=>{
    const [login, setLogin] = useState<User>({
        name: "",
        logedIn: false
    })
    return (
        <LoginContext value={{login, setLogin}}>
            {children}
        </LoginContext>
    )
}