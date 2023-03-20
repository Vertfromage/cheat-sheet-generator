import { createContext, useReducer } from "react";
// This is to maintain local state, so we can keep local state in sync with the database
// had to install dispatch to make this work: npm install dispatch
// This is basic - full tutorial on context to do later learn more : https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=1&t=0s
// Allows the rest of the app to have access formulasContext
export const pageContext = createContext()

export const pageReducer = (state, action) => {
    switch(action.type){
        case 'SET_PAGE_FORMULAS':
            return {
                formulas: action.payload
            }
        case 'CREATE_PAGE_FORMULA':
            return {
                // ... spreads the previous state which is an array of pre-existing formula objects
                formulas: [action.payload, ...state.formulas]
            }
        case 'DELETE_PAGE_FORMULA':
            return{
                // get rid of workout we deleted from our state using filter
                formulas: state.formulas.filter((f)=>f.id !=action.payload.id)
            }
        case 'UPDATE_PAGE_FORMULA':
            return{
                // new updated verion of object with the currect state minus the past verion of the object
                formulas: [action.payload, ...state.formulas.filter((f)=>f.id !=action.payload)]
            }
        default: return state
    }
}

// children represents whatever it wraps
export const PageContextProvider = ({ children }) => {
    // like useState but more powerful has a reducer function
    const [state, dispatchPage] = useReducer(pageReducer, {
        // Initial value for state
        formulas: []
    })
    // how to call dispatch
    // dispatch({type: 'CREATE_FORMULA', payload:[{},{}]})

     return (
        <pageContext.Provider value={{...state, dispatchPage}}>
            {children}
        </pageContext.Provider>
     )
}