import { createStore } from 'redux';

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            // const count = typeof action.count === 'number' ? action.count : 1
            return {
                count: action.count
            }
        default:
            return state;    
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});


// Actions -> an object that gets sent to the store

// Action creater - functions that return action objects
// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// }

// Destructuring incrementCount
const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

// const decrementCount = (payload = {}) => {
//     return {
//         type: 'DECREMENT',
//         decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
//     }
// }

//Destructuring decrementCount
const decrementCount = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

// const setCount = (payload) => {
//     return {
//         type: 'SET',
//         count: payload.count
//     }
// }

// Destructuring setCount
const set = ({ count }) => {
    return {
        type: 'SET',
        count
    }
}

const reset = () => {
    return {
        type: 'RESET'
    }
}



store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(set({ count: 150}));



