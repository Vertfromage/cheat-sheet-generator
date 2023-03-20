import React from 'react'
import { useUserContext } from "../hooks/useUserContext"

function Pages() {
  const {user, dispatchUser} = useUserContext()

  const handleClick = () =>{
    console.log("clicked")
    // get page from database based off id
  }

  return (
    <div>
        {user.pages && user.pages.map((page)=>(
                    <div id={JSON.parse(page).id} onClick={handleClick} key={JSON.parse(page).id} >{<h2>{JSON.parse(page).name}</h2>}</div>
                ))}
    </div>
  )
}

export default Pages