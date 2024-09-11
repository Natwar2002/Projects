import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList () {
    const todos = useSelector(state => state.todos);
    return (
        <div>
            { todos.map(todo => {
                return (
                    <TodoItem key={todo.id} text={todo.text} isComplete={todo.isComplete} id={todo.id} />
                )
            }) }
        </div>
    );
}

export default TodoList;