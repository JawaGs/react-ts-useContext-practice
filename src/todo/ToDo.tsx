import { ToDoList } from "./components/ToDoList"
import { ToDoProvider } from "./context/ToDoProvider"


export const ToDo = () => {
  return (
    <ToDoProvider>
      <h1>ToDo:</h1>
      <ToDoList />
    </ToDoProvider>
  )
}
