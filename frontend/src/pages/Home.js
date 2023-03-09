
import { Container } from "@mui/material"

import { useEffect } from "react"
import BottomBar from "../components/BottomBar"
import FormulaControls from "../components/FormulaControls"
import FormulasPage from "../components/FormulaPage"
import { useFormulasContext } from "../hooks/useFormulasContext"

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
        <Container id="no-print"><FormulaControls/></Container>
        <Container className="Page Container">
        <FormulasPage/>
        </Container>
        <Container id="no-print"><BottomBar/></Container>
        </div>
        
    )
}

export default Home