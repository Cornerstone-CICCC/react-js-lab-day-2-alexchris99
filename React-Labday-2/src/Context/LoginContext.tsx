import { createContext, type SetStateAction } from "react";
import type { User } from "../Types/User";

export type LoginContextType ={
    login : User,
    setLogin : React.Dispatch<SetStateAction<User>>
}

export const  LoginContext = createContext<LoginContextType>({
    login: {
        name: "",
        logedIn: false
    },
    setLogin: ()=>{}
})
