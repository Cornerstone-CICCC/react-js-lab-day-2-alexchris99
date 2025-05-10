import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const UseLogin = ()=>{
    const context = useContext(LoginContext)
     if (!context) throw Error("useCart must be used inside LoginContextProvider")
    return context
}