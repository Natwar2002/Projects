import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator, toggleTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";

console.log(store.getState());

store.dispatch(addTodoActionCreator("Buy Milk"));
console.log(store.getState().todoState);

store.dispatch(addTodoActionCreator("Buy Eggs"));
console.log(store.getState().todoState);

store.dispatch(addUserActionCreator("Ram"));
console.log(store.getState().userState);
