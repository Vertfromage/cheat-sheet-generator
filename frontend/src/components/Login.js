import { FormGroup, TextField, Button, FormLabel } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useUserContext } from "../hooks/useUserContext"

function Login({setToken}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState("")
    const [loginOrRegister, setLoginOrRegister] = useState(true)
    const {user, dispatchUser} = useUserContext()
    
    useEffect(()=>{
    },[loginOrRegister])

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmChange = (e) => {
        setConfirm(e.target.value)
    }
    const handleSwitchLoginOrRegister = (e) =>{
        setLoginOrRegister(!loginOrRegister)
    }
    const handleSubmitLogin = async (e) =>{
        e.preventDefault()
        
        if(checkInputsLogin()){
            console.log("retrieving token...")
            const result = await loginUser({email, password})
            if(result.token){
                console.log(result)
                dispatchUser({type: 'SET_USER',payload:{id:result.userId, email: email, pages: result.pages}})  
                setToken({token: result.token, userId: result.userId})
                console.log(user)
            }else{
                setError( "Login failed")
            }
        }
    }
    const handleSubmitRegister = async (e) =>{
        e.preventDefault()
        if(checkInputsRegister()){
            console.log("retrieving token...")
            const pass = password
            const result = await registerUser({email, pass}) 
            if(result.token){
                // store user state
                dispatchUser({type: 'SET_USER',payload:{id:result.userId, email: email, pages: result.pages}})  
                setToken({token: result.token})
            }else{
                setError( "Registration failed")
            }
        }
    }


    const checkInputsLogin= () => {
        if(email ===""||password===""){
            setError("Please fill in all inputs!")
            return false
        }
        return true
    }

    const checkInputsRegister= () => {
        if(email ===""||password===""|| confirm===""){
            setError("Please fill in all inputs!")
            return false
        }
        if(password!==confirm){
            setError("passwords don't match")
            return false
        }
        return true
    }

    const loginUser = async (credentials) => {
        // pass credentials to backend wait to see if you login... 
        const response = await fetch('api/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        return json
    }

    const registerUser = async (credentials) =>{
        // pass credentials to backend wait to see if you login... 
        const response = await fetch('api/auth/register', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        return json
    }
    
    if(loginOrRegister){
  return (
    <div>
        <Container>
            <h2 style={{paddingLeft:'10px'}}>Login!</h2>
            <form>
        <FormGroup>
        <TextField 
            placeholder="Email"
            label="Email"
            color="secondary"
            focused
            margin ='normal'
            onChange={handleEmailChange}
            value={email}
            required
            autoComplete='off'
        >
        </TextField>
        <TextField 
            placeholder="Password"
            label="Password"
            type='password'
            color="secondary"
            focused
            margin ='normal'
            onChange={handlePasswordChange}
            value={password}
            required
            autoComplete='off'
        >
        </TextField>
        <Button variant="contained" color="secondary" onClick={handleSubmitLogin}>Login</Button>
        <FormLabel error={true}>{error}</FormLabel>
        </FormGroup>
        </form>
        <Button onClick={handleSwitchLoginOrRegister} >Register?</Button>
        </Container>
    </div>
  )
    }else{
        return (
            <div>
                <Container>
                <h2 style={{paddingLeft:'10px'}}>Register!</h2>
                <h5>Register to use Formula Factory and get helpful study reminders!</h5>
                    <form>
                <FormGroup>
                <TextField 
                    placeholder="Email"
                    label="Email"
                    color="secondary"
                    focused
                    margin ='normal'
                    onChange={handleEmailChange}
                    value={email}
                    required
                    autoComplete='off'
                >
                </TextField>
                <TextField 
                    placeholder="Password"
                    label="Password"
                    type='password'
                    color="secondary"
                    focused
                    margin ='normal'
                    onChange={handlePasswordChange}
                    value={password}
                    required
                    autoComplete='off'
                >
                </TextField>
                <TextField 
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    type='password'
                    color="secondary"
                    focused
                    margin ='normal'
                    onChange={handleConfirmChange}
                    value={confirm}
                    required
                    autoComplete='off'
                >
                </TextField>
                <Button variant="contained" color="secondary" onClick={handleSubmitRegister}>Register</Button>
                <FormLabel error={true}>{error}</FormLabel>
                </FormGroup>
                </form>
                <Button onClick={handleSwitchLoginOrRegister} >Login?</Button>
                </Container>
            </div>
          )
    }
}

export default Login