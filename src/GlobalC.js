import React, { createContext,useReducer,useEffect } from 'react'
export const Context=createContext()
const initialState={
    tracks:[],loading:false,heading:"Start"
}
const reducer=(state,action)=>{
    switch(action.type){
            case 'one':
                return{
                     ...state,
                     tracks:action.payload
                }
            case 'two':
                return{
                    ...state,
                    heading:action.payload
                }   
                case 'three':
                return{
                    ...state,
                    loading:action.payload
                } 
    }
      return state
}
export default function GlobalC({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <Context.Provider value={{state,dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
}
