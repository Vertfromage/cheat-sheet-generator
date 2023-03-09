import { Button, FormGroup, FormLabel, TextField } from '@mui/material';
import { Container } from "@mui/system";
import { MathJax } from "better-react-mathjax";
import React, { useState } from 'react';
import { usePageContext } from "../hooks/usePageContext";

const EditFormulaPageBlock = (props) => {
    // retrieve formula from formulas using page context and props.id
    const {formulas, dispatchPage} = usePageContext()
    const editFormula = formulas.filter((f)=>f.id===props.id)[0]

    const [name, setName] = useState(editFormula.name)
    const [formula, setFormula] = useState(editFormula.formula)
    const [error, setError] = useState(null)

     // input handlers
     const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleFormulaChange = (e) => {
        setFormula(e.target.value)
    }

    const handleSubmit = () =>{
        editFormula.name = name
        editFormula.formula = formula
        dispatchPage({type: 'UPDATE_PAGE_FORMULA',payload: editFormula})
    }



  return (
    
    <div>
        <form className='edit'>
        <FormGroup>
        <TextField 
            placeholder="Formula Name"
            label="Formula Name"
            color="secondary"
            focused
            margin ='normal'
            onChange={handleNameChange}
            value={name}
            required
            autoComplete='off'
        >
        </TextField>
        <TextField 
            placeholder="Formula MathJax"
            label="Formula"
            color="secondary"
            focused
            margin ='normal'
            onChange={handleFormulaChange}
            value={formula}
            autoComplete='off'
            multiline
            required
        ></TextField>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
        <FormLabel error={true}>{error}</FormLabel>
        </FormGroup>
        </form>
        <Container>
            <h4>{name}</h4>
            <p > 
            <MathJax>
            {formula}
            </MathJax>
            </p>
        </Container>
    </div>
    
  )
}

export default EditFormulaPageBlock