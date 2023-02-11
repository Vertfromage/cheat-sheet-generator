import React, { useState } from 'react'
import {FormGroup, TextField, Button, FormLabel} from '@mui/material';
import { useFormulasContext } from "../hooks/useFormulasContext"

const FormulaForm = () => {
    const {dispatch} = useFormulasContext()
    const [name, setName] = useState("")
    const [formula, setFormula] = useState("")
    const [tags, setTags] = useState("")
    const [error, setError] = useState(null)


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

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const tagsArr = tags.split(',')
        console.log("tags string "+tags)
        console.log(tagsArr)
        const formulaObj = {name, formula, tagsArr}

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
            // reset form
            setName('')
            setFormula('')
            setTags('')
            setError(null)
            console.log('New formula added',json)
            json.createdAt = new Date().toDateString()
            dispatch({type:'CREATE_FORMULA', payload: json})
        }
    }

  return (
    <div className='FormulaForm'>
        <h4>Add a Formula</h4>
        <form className='create'>
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
        <TextField 
            placeholder="FirstTag, SecondTag"
            label="Tags"
            color="secondary"
            focused
            margin ='normal'
            autoComplete='off'
            onChange={handleTagsChange}
            value={tags}
            multiline
        ></TextField>
        
        <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
        <FormLabel error={true}>{error}</FormLabel>
        </FormGroup>
        </form>
    </div>
  )
}

export default FormulaForm