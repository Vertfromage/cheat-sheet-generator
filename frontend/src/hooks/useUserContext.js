import { userContext } from "../context/UserContext";
import { useContext } from "react";

export const useUserContext = () => {
    const context = useContext(userContext)

    if(!context){
        throw Error("usePage context must be inside the context provider")
    }

    return context
}