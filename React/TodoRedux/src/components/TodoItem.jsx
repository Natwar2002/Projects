import { useDispatch } from "react-redux";
import { removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todoActions";

function TodoItem ({ id, text, isComplete}) {

    const dispatch = useDispatch();

    function removeTodo() {
        dispatch(removeTodoActionCreator(id));
    }

    function markCompleted () {
        dispatch(toggleTodoActionCreator(id));
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" checked={isComplete} onClick={markCompleted} />
            <p>{ text }</p>
            <button onClick={removeTodo}>X</button>
        </div>
    );
}

export default TodoItem;