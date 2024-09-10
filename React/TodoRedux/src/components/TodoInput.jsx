import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from '../redux/actions/todoActions';

function TodoInput() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    function addTodoToStore () {
        dispatch(addTodoActionCreator(todo));
        setTodo('');
    }

    return (
        <div>
            <input type="text" onChange={e => setTodo(e.target.value)} value={todo} />
            <button onClick={addTodoToStore}>Add Todo</button>
        </div>
    );
}

export default TodoInput;