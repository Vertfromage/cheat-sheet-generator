import { MathJax } from "better-react-mathjax"
import { Container } from "@mui/material"
import { useEffect } from "react"
import FormulaBlock from "../components/FormulaBlock"
import FormulaForm from "../components/FormulaForm"
import { useFormulasContext } from "../hooks/useFormulasContext"

const Home = () => {
    // Usaing global state, destructuring to get formulas (state) and dispatch (formula for updating)
    const {formulas, dispatch} = useFormulasContext()

    // This only gets called when the page first loads, because of the empty []
    useEffect(()=>{
        const fetchFormulas = async ()=>{
            const response = await fetch('/api/formulas') // ToDo update for production - teporarily working becuase of proxy in the package.json
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_FORMULAS',payload: json})
            }
        }
        fetchFormulas()
    },[])

    return (
        
        <div className="home">
        <MathJax>
        <Container maxWidth="md" >
            <h2>Under construction</h2>
            <div className="Formulas">
                {formulas && formulas.map((formula)=>(
                    <FormulaBlock key={formula.id} formula={formula}/>
                ))}
            </div>
        </Container>
        </MathJax>
        <Container>
        <FormulaForm/>
        </Container>
        </div>
        
    )
}

export default Home