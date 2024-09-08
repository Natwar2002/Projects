function numberReducer (incomingObject, action ) {
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

    } else if (action.type === "INCREMENT") {
        return {
            ...incomingObject,
            number: incomingObject.number + 1,
        }

    } else if (action.type === "DECREMENT") {
        return {
            ...incomingObject,
            number: incomingObject.number - 1,
        }

    } else {
        return incomingObject;
    }
}


const init = { number: 0 };
console.log(numberReducer(init, { type: 'SUBTRACT', payload: 33 }));
