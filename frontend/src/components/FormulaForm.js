import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormulasContext } from "../hooks/useFormulasContext";
import { v4 as uuid } from 'uuid';
import { usePageContext } from "../hooks/usePageContext";
import { Container } from "@mui/system";
import { MathJax } from "better-react-mathjax";

const FormulaForm = () => {
    const {dispatch} = useFormulasContext()
    const {dispatchPage} = usePageContext()
    const [name, setName] = useState("")
    const [formula, setFormula] = useState("")
    const [tags, setTags] = useState("")
    const [error, setError] = useState(null)
    const [toDatabase, setToDatabase] = useState(false)

    useEffect(() => {
      console.log("re-rendered")
      console.log(toDatabase)
    }, [toDatabase])
    


    // input handlers
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleFormulaChange = (e) => {
        setFormula(e.target.value)
    }
    const handleTagsChange = (e) => {
        setTags(e.target.value)
    }
    const handleChecked = () =>{
        setToDatabase(!toDatabase)
    }

    const handleSubmit = async(e) =>{
        if(!name || !formula){setError("Missing Something"); return}
        e.preventDefault()
        const tagsArr = tags.split(',')
        console.log("tags string "+tags)
        console.log(tagsArr)

        const formulaObj = {name, formula, tagsArr}
        
        if(toDatabase){
        const response = await fetch('/api/formulas', {
            method: 'POST',
            body: JSON.stringify(formulaObj),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            console.log('New formula added',json)
            json.createdAt = new Date().toDateString()
            dispatch({type:'CREATE_FORMULA', payload: json})
        }
    }
        //  Either way add to page.
        clearForm()
        addFormulaToPage(formulaObj)
    }

    const clearForm = () =>{
        // reset form
        setName('')
        setFormula('')
        setTags('')
        setError(null)
    }

    const addFormulaToPage= (formula) =>{
        const pageformula = JSON.parse(JSON.stringify(formula))
            pageformula.id = uuid()
            // could be better, but makes sure it drops in at bottom
            pageformula.gridObj = { i: formula.id, x: 0, y: window.innerHeight/10, w: 2, h: 4} 
            dispatchPage({type: 'CREATE_PAGE_FORMULA',payload: pageformula})
    }

  return (
    <div className='FormulaForm'>
        <form className='create'>
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChecked}/>} label="Add to database"/>
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
        <div>
            <p > 
            <MathJax>
            {formula}
            </MathJax>
            </p>
        </div>
        { toDatabase ? <TextField 
            placeholder="FirstTag, SecondTag"
            label="Tags"
            color="secondary"
            focused
            margin ='normal'
            autoComplete='off'
            onChange={handleTagsChange}
            value={tags}
            multiline
        ></TextField> : <></>}
        <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
        <FormLabel error={true}>{error}</FormLabel>
        </FormGroup>
        </form>
    </div>
  )
}

export default FormulaForm