import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"
import { Todo } from "../interfaces/interfaces"

interface props{
    todo:Todo
}

export const TodoItem = ( { todo }:props ) =>{
    const { toggleTodo } = useContext(ToDoContext)

    const handelDoubleClick = () => {
        toggleTodo( todo.id )
        console.log(" Double Click ", todo.desc )
        
    }

    return( 
        <li 
            onDoubleClick={ handelDoubleClick }
            style={{
                cursor:"pointer",
                textDecoration: todo.completed? "line-through":""
            }}
        >
            { todo.desc }
        </li>
     )
}