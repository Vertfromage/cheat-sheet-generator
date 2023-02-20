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
        <div 
            className="FormulaPageBlock"
            id="section-to-print"
            >
            { title && <h4>{formula.name}</h4>}
            <p>
            <MathJax hideUntilTypeset={"every"}
                inline
                dynamic 
            >
                {formula.formula}
            </MathJax>
            </p>
            <span id="no-print" className="material-symbols-rounded span-buttons" onClick={handleDeleteClick}>delete</span> 
            <span id="no-print" className="material-symbols-rounded span-buttons" onClick={handleTitleClick}>Title</span> 
        </div>
    )
}else{
    return(
        <MathJax>
        <div className="FormulaPageBlock">
            { title && <h4>{formula.name}</h4>}
            <p> 
            <MathJax hideUntilTypeset={"every"}
                inline
                dynamic 
            >
                {formula.formula}
            </MathJax></p>
        </div>
        </MathJax>
    )
}
}

export default FormulaPageBlock