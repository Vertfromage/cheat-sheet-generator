
import { Container } from "@mui/material"
import FormulaForm from "../components/FormulaForm"
import FormulasList from "../components/FormulasList"
import { useFormulasContext } from "../hooks/useFormulasContext"
import { useEffect } from "react"
import FormulasPage from "../components/FormulaPage"
import MathjaxLogo from "../components/MathjaxLogo"

const Home = () => {

    // Loading all formulas into state
    const {dispatch} = useFormulasContext()
    useEffect(()=>{
        const fetchFormulas = async ()=>{
            const response = await fetch('/api/formulas') // ToDo update for production - teporarily working becuase of proxy in the package.json
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_FORMULAS',payload: json})
            }
        }
        fetchFormulas()
    },[dispatch])
         

    return (
        <div className="home">
        <Container maxWidth="md" >
        <FormulasPage/>
        </Container>
        <Container>
        <h4>Formulas List</h4>
        <FormulasList/>
        <FormulaForm/>
        <MathjaxLogo/>
        </Container>
        </div>
        
    )
}

export default Home