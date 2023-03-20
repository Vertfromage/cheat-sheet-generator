import { createContext, useReducer } from "react";

export const userContext = createContext()

export const userReducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                user: action.payload
            }
        default: return state
    }
}

// children represents whatever it wraps
export const UserContextProvider = ({ children }) => {
    // like useState but more powerful has a reducer function
    const [state, dispatchUser] = useReducer(userReducer, {
        // Initial value for state
        user: {}
    })
    // how to call dispatch
    // dispatch({type: 'CREATE_FORMULA', payload:[{},{}]})

     return (
        <userContext.Provider value={{...state, dispatchUser}}>
            {children}
        </userContext.Provider>
     )
}