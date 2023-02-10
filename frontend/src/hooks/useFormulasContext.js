import { formulasContext } from "../context/FormulasContext";
import { useContext } from "react";

// youtuber (https://www.youtube.com/@NetNinja) suggests that it's better to have custom hooks for each context, this is a custom hook

export const useFormulasContext = () => {
    const context = useContext(formulasContext)

    if(!context){
        throw Error("useFormulas context must be inside the context provider")
    }

    return context
}