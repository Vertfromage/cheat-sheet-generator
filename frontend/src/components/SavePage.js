import React from 'react'
import { Button, FormGroup, FormLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { usePageContext } from "../hooks/usePageContext";
import { useUserContext } from "../hooks/useUserContext"


function SavePage() {
    const {formulas} = usePageContext()
    const [name, setName] = useState("")
    const [error, setError] = useState(null)
    const {user, dispatchUser} = useUserContext()

    // input handlers
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(name===""){
            setError("Need name!")
            return
        }

        if(user){
        const pageBody = JSON.stringify(formulas)
        const userId = user.id

        const pageResponse = await savePage({userId, pageBody, name})
        console.log("PageId "+pageResponse.pageId)
        
        user.pages.push(JSON.stringify({name:name, pageId:pageResponse.pageId}))
        
        
        // This sets it in the userContext
        dispatchUser({type: 'SET_USER',payload:user})

        // we still need to save in database
        const updateResponse = await updateUser({id:user.id, pages: user.pages})
        console.log(updateResponse)

        console.log(user)
        console.log(user.pages)
        }else{
            console.log("user context missing")
        }
    }

    const savePage = async (credentials) => {
        // pass credentials to backend wait to see if you login... 
        const response = await fetch('api/pages/', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        return json
    }

    // toDo for existing page... 
    const updatePage = () =>{

    }

    const updateUser = async (input) =>{
        const response = await fetch('api/users/', {
            method: 'PATCH',
            body: JSON.stringify(input),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        return json
    }

  return (
    <div>
        <form className='save'>
        <FormGroup>
        <TextField 
            placeholder="Page Name"
            label="Page Name"
            color="secondary"
            focused
            margin ='normal'
            onChange={handleNameChange}
            value={name}
            required
            autoComplete='off'
        >
        </TextField>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>Save</Button>
        <FormLabel error={true}>{error}</FormLabel>
        </FormGroup>
        </form>
    </div>
  )
}

export default SavePage