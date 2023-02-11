import { MathJax } from "better-react-mathjax"
import { useState } from "react"
import { usePageContext } from "../hooks/usePageContext"

const FormulaPageBlock = (props) =>{
    const {dispatchPage} = usePageContext()
    const handleDeleteClick= async() =>{
        dispatchPage({type: 'DELETE_PAGE_FORMULA',payload: formula})
    }    
    const handleTitleClick= async() =>{
        formula.showTitle = !title // For later retrieval
        setTitle(!title)
    }    

    const [title, setTitle] = useState(true)
    
    const formula = props.formula

    if(props.edit){
    return (
        <MathJax>
        <div className="FormulaPageBlock">
            { title && <h4>{formula.name}</h4>}
            <p> {formula.formula}</p>
            <span className="material-symbols-rounded" onClick={handleDeleteClick}>delete</span> 
            <span className="material-symbols-rounded" onClick={handleTitleClick}>Title</span> 
        </div>
        </MathJax>
    )
}else{
    return(
        <MathJax>
        <div className="FormulaPageBlock">
            { title && <h4>{formula.name}</h4>}
            <p> {formula.formula}</p>
        </div>
        </MathJax>
    )
}
}

export default FormulaPageBlock