
import { Container, Grid, Box} from "@mui/material"

import { useFormulasContext } from "../hooks/useFormulasContext"
import { useEffect } from "react"
import FormulasList from "../components/FormulasList"
import FormulaForm from "../components/FormulaForm"
import FormulasPage from "../components/FormulaPage"
import MathjaxLogo from "../components/MathjaxLogo"
import FormulaControls from "../components/FormulaControls"

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
        <Container><FormulaControls/></Container>
        <Container className="Page Container">
        <FormulasPage/>
        </Container>
        <Container><MathjaxLogo/></Container>
        </div>
        
    )
}

export default Home