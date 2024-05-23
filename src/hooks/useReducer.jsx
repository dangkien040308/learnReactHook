
// useReducer is used to manage state in our react application 
// In other words , useReducer works like a state management tool
// State management is used to manage all states of application in a simple way
// Always use the useReducer hook when you have a lot of states and methods to handle
// Syntax :  const [state, dispatch] = useReducer(reducer, initialState)

import { useReducer } from "react"

const initialState = { count : 0 }
const reducer = (state, action) => {
    switch (action) {
        case 'increase' :
            return { count : state.count + 1 }
        case 'decrease' :
            return { count : state.count - 1 }
    }
    return { count : state.count + 1 }
}
export default function UsingReducerHook() {
    const [state,dispatch] = useReducer(reducer, initialState)
    const handleIncrease = () => {
        dispatch('increase')
    }
    const handleDecrease = () => {
        dispatch('decrease')
    }
    return (
        <div>
          <div>Count {state.count}</div>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}