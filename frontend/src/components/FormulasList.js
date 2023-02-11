import { useFormulasContext } from "../hooks/useFormulasContext"
import FormulaDisplayBlock from "../components/FormulaDisplayBlock"

const FormulasList = () =>{
    
    const {formulas} = useFormulasContext()
    return (
        
        <div className="FormulasList">
        <div className="Formulas">
                {formulas && formulas.map((formula)=>(
                    <FormulaDisplayBlock key={formula.id} formula={formula}/>
                ))}
        </div>
        </div>
    )
}

export default FormulasList