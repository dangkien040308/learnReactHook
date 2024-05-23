
// useMemo hook is used to apply Memoization in React
// Memoization is a techique for improving the performance of code
// It is used to avoid expensive calculations on every render when the returned value is not change
// => useMemo is used to improve performance of our react application
// => We can stop running unwanted functions on Re-rendering
// Syntax : const variable = useMemo( callback , [dependancy] ) or useMemo(component)
import { useMemo, useState } from "react"

export default function UsingMemoHook() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const expensiveFunction = (number) => {
        for ( var i = 0 ; i< 10000 ; i++ ) {}
        return number
     }
    const calculation = useMemo( () => {
        return expensiveFunction(number)
    },[number])
    const cssStyle = {
        padding : "10px" ,
        backgroundColor : dark ? "black" : "white" , 
        color : dark ? "white" : "black" , 
    }
    return (
        <div style={cssStyle}>
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
          <div>Calculation : {calculation}</div>
          <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}