import { pageContext } from "../context/PageContext";
import { useContext } from "react";

export const usePageContext = () => {
    const context = useContext(pageContext)

    if(!context){
        throw Error("usePage context must be inside the context provider")
    }

    return context
}