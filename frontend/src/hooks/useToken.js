import { useState } from 'react'
import { useUserContext } from "../hooks/useUserContext"


// Tutorial to review login with sessions: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// ToDo: hook up a remember me option to switch between session storage if no, and localStorage if yes
// to switch to local storage just replace sessionStorage with localStorage
export default function useToken() {
    const {user, dispatchUser} = useUserContext()
    const getToken = ()=>{
          const userToken = JSON.parse(sessionStorage.getItem('token'))

          if(userToken){
          // This is getting called twice and I'm not sure why
          if(userToken.userId && !user.id){ 
            const fetchUser = async ()=>{
              const response = await fetch('/api/users/'+userToken.userId) // ToDo update for production - teporarily working becuase of proxy in the package.json
              const json = await response.json()
              if(response.ok){
                  dispatchUser({type: 'SET_USER',payload:{id:userToken.userId, email: json.email, pages: json.pages}})
              }
          }
          fetchUser()
          console.log("User fetched")
        }else{
          // console.log("Not fetching user")
        }
          return userToken.token
      }
      }

      const [token, setToken] = useState(getToken())

      const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token) // were're going to have an object here
      }

      return {
        setToken: saveToken,
        token
      }
}
// //ToDo Logout
// export default function clearToken() {
//   sessionStorage.removeItem('token')
// }

  
  