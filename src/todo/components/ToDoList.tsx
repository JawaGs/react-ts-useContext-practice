import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"
import { TodoItem } from "./ToDoItem"

export const ToDoList = () => {
    const { todoState } = useContext( ToDoContext )
    const { todos } = todoState

    return (
        <ul>
            { todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> ) }
        </ul>
    )
}
