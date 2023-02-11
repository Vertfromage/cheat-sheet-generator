import { useFormulasContext } from "../hooks/useFormulasContext"
import { MathJax } from "better-react-mathjax"
import { usePageContext } from "../hooks/usePageContext"
import { v4 as uuid } from 'uuid';


const FormulaDisplayBlock = ({ formula }) =>{
    const {dispatch} = useFormulasContext()
    const {dispatchPage} = usePageContext()
    const handleClick = async() =>{
        const response = await fetch('api/formulas/'+formula.id,{
            method: 'DELETE'
        })

        // dynamoDB doesn't pass the object back when it deletes it, so we pass formula in from object
        if(response.ok){
            dispatch({type: 'DELETE_FORMULA',payload: formula})
        }
    }    
    
    const handleDragStart = () =>{}
    const handleDrag = () =>{}
    const handleDragEnd = (e) =>{
        console.log(e.clientX+" "+window.innerWidth)
        if(e.clientX < window.innerWidth*.6){
            const pageformula = JSON.parse(JSON.stringify(formula))
            pageformula.id = uuid()
            dispatchPage({type: 'CREATE_PAGE_FORMULA',payload: pageformula})
        }
    }

    return (
        <MathJax>
        <div className="FormulaDisplayBlock" 
            draggable 
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}>
            <h4>{formula.name}</h4>
            <p > {formula.formula}</p>
            <p>{formula.tags ? "Tags: "+ formula.tags.toString() : ""}</p>
            {/* <p>{new Date(formula.createdAt).toDateString()}</p> */}
            <span className="material-symbols-rounded" onClick={handleClick}>delete</span>

        </div>
        </MathJax>
    )
}

export default FormulaDisplayBlock