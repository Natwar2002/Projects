import { combineReducers, createStore } from "redux";

const initialObject = {
    number: 0,
    anotherNumber: 0,
}

function numberReducer (incomingObject = initialObject, action ) {
    if(action.type === 'ADD') {
        const numberToAdd = action.payload;
        return {
            ...incomingObject,
            number: incomingObject.number + numberToAdd,
        }

    } else if (action.type === 'SUBTRACT') {
        const numberToSubtract = action.payload;
        return {
            ...incomingObject,
            number: incomingObject.number - numberToSubtract,
        }

    } else {
        return incomingObject;
    }
}

function anotherNumberReducer (incomingObject = initialObject, action) {
    if (action.type === "INCREMENT") {
        return {
            ...incomingObject,
            anotherNumber: incomingObject.anotherNumber + 1,
        }

    } else if (action.type === "DECREMENT") {
        return {
            ...incomingObject,
            anotherNumber: incomingObject.anotherNumber - 1,
        }

    } else {
        return incomingObject;
    }
}

const rootReducer = combineReducers({
    number: numberReducer,
    anotherNumber: anotherNumberReducer,
});

const store = createStore(rootReducer);

// returns the state
console.log(store.getState());
store.subscribe(()=> {
    console.log("Store has been updated", store.getState());
});

// update the state object
store.dispatch({ type: 'ADD', payload: 15 });
store.dispatch({ type: 'INCREMENT', payload: null });