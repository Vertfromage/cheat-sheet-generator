import React from 'react'
import { Button, Card } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import { usePageContext } from "../hooks/usePageContext"
import { useUserContext } from "../hooks/useUserContext"

function PageBox({pageId, name}) {
    const {dispatchPage} = usePageContext()
    const {user, dispatchUser} = useUserContext()
    const navigate = useNavigate()
  
    const handleClick = async () =>{
        // get page from database based off id
        if(pageId){
            const response = await fetch('/api/pages/'+pageId)
            const json = await response.json()
            const pageBody = JSON.parse(json.pageBody)

            if(pageBody){
                // load into pageContext
                dispatchPage({type: 'SET_PAGE_FORMULAS',payload: pageBody})
                // view in editor at home 
                navigate('../home')
            }
        }
      }

    const handleDelete = async () =>{
                // get page from database based off id
                if(pageId){
                    console.log("delete"+pageId)
                    await fetch('api/pages/'+pageId,{
                        method: 'DELETE'
                    })

                    // remove page from user.pages
                    user.pages = user.pages.filter((p)=>JSON.parse(p).pageId !== pageId)
          
                    // send updated user to database
                    await updateUser({id:user.id, pages: user.pages})

                    // update in context
                    dispatchUser({type: 'SET_USER',payload:user})
                }
    }

    // duplicate from save page
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
    <Box sx={{ display: 'inline-block', width: "25%", textAlign:'center' }}>
        <Card variant='outlined' >
            <div id={pageId} onClick={handleClick}>
                {<h2>{name}</h2>}
                {<Button onClick={handleDelete}>DELETE</Button>}
            </div>
        </Card>
    </Box>
  )
}

export default PageBox