import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { ToDoContext } from "./ToDoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE:TodoState = {
    todoCount:2,
    todos:[
      {
        id:"1",
        desc: "Tarea numero 1",
        completed:false
      },
      {
        id:"2",
        desc: "Tarea numero 2",
        completed:false
      }
    ],
    completed:0,
    pending:2
}

interface ToDoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ToDoProvider = ({ children }:ToDoProviderProps) => {
  const [ todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE )

  const toggleTodo = ( id:string ) =>{
    dispatch( { type: "toggleTodo", payload: { id } } )
  }

  return (
    <ToDoContext.Provider value={{ todoState, toggleTodo }}>
        { children }
    </ToDoContext.Provider>
  )
}
