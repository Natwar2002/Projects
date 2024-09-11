import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/slices/todoSlice";

function TodoItem ({ id, text, isComplete}) {

    const dispatch = useDispatch();

    function removeTodoItem() {
        dispatch(removeTodo(id));
    }

    function markCompleted () {
        dispatch(toggleTodo(id));
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" checked={isComplete} onClick={markCompleted} />
            <p>{ text }</p>
            <button onClick={removeTodoItem}>X</button>
        </div>
    );
}

export default TodoItem;