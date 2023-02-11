import { Button } from "@mui/material";
import GridLayout from "react-grid-layout";
import FormulaPageBlock from "./FormulaPageBlock"
import { useState } from "react"

//Stylesheets for react-grid-layout 
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import { usePageContext } from "../hooks/usePageContext";

const FormulasPage = () =>{
    const {formulas} = usePageContext()
    // layout is an array of objects, see the demo for more complete usage
    const layout = []

    formulas && formulas.map((formula)=>(
        layout.push( { i: formula.id, x: 0, y: 0, w: 3, h: 4})
    ))

    const [edit, setEdit] = useState(true)
    const handleClick = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }
    
    return (
     <div>
     <Button variant="outlined" onClick={handleClick}>Edit {edit ? 'OFF': 'ON'}</Button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >

        {formulas && formulas.map((formula)=>(
                    <div key={formula.id}>{<FormulaPageBlock key={formula.id} formula={formula} edit={edit}/>}</div>
                ))}
      </GridLayout>
      </div> 
    )
  }

  export default FormulasPage
  
