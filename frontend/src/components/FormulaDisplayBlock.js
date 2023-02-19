import { useFormulasContext } from "../hooks/useFormulasContext"
import { MathJax } from "better-react-mathjax"
import { usePageContext } from "../hooks/usePageContext"
import { v4 as uuid } from 'uuid';
import {MobileView, BrowserView} from 'react-device-detect';



const FormulaDisplayBlock = ({ formula }) =>{
    const {dispatch} = useFormulasContext()
    const {dispatchPage} = usePageContext()
    const handleClickDelete = async() =>{
        const response = await fetch('api/formulas/'+formula.id,{
            method: 'DELETE'
        })

        // dynamoDB doesn't pass the object back when it deletes it, so we pass formula in from object
        if(response.ok){
            dispatch({type: 'DELETE_FORMULA',payload: formula})
        }
    }
    
    const handleClickAddToPage =() => {
        addFormulaToPage()
    }
    
    const handleDragStart = () =>{}
    const handleDrag = () =>{}
    const handleDragEnd = (e) =>{
        if(e.clientX < window.innerWidth*.8){
            addFormulaToPage()
        }
    }

    const addFormulaToPage= () =>{
        const pageformula = JSON.parse(JSON.stringify(formula))
            pageformula.id = uuid()
            // could be better, but makes sure it drops in at bottom
            pageformula.gridObj = { i: formula.id, x: 0, y: window.innerHeight/10, w: 2, h: 4} 
            dispatchPage({type: 'CREATE_PAGE_FORMULA',payload: pageformula})
    }

    return (
        
        <div 
            className="FormulaDisplayBlock" 
            draggable 
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}>
            <h4>{formula.name}</h4>
            <p > 
            <MathJax>
                {formula.formula}
            </MathJax>
            </p>
            {/* <p>{formula.tags ? "Tags: "+ formula.tags.toString() : ""}</p>
            <p>{new Date(formula.createdAt).toDateString()}</p> */}
            <BrowserView>
            <span className="material-symbols-rounded span-buttons" onClick={handleClickDelete}>delete</span>
            </BrowserView>
           
            <MobileView>
            {/* https://www.npmjs.com/package/react-device-detect */}
            <span className="material-symbols-rounded span-buttons" onClick={handleClickDelete}>delete</span>
            <span className="material-symbols-rounded span-buttons" onClick={handleClickAddToPage}>add</span>
            </MobileView>
        </div>
    )
       
}

export default FormulaDisplayBlock