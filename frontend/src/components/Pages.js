
import React from 'react'
import { useUserContext } from "../hooks/useUserContext"
import PageBox from './PageBox'

function Pages() {
  const {user} = useUserContext()

  return (
    <div>
        {user.pages && user.pages.map((page)=>(
                   page && <PageBox key={JSON.parse(page).pageId} name={JSON.parse(page).name} pageId={JSON.parse(page).pageId}/>
                ))}
    </div>
  )
}

export default Pages