import { useCallback, useState } from "react"
// useCallback is used to return Memoize function
// It's also useful for preventing functions from being re-created on re-rendering

import PrintTable from "./printTable"

export default function UsingCallBackHook() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
  
    const cssStyle = {
        padding : "10px" ,
        backgroundColor : dark ? "black" : "white" , 
        color : dark ? "white" : "black" , 
    }   
    const calculateTable = useCallback(() => {
        let newValue = number
        return [newValue * 1, newValue * 2, newValue * 3, newValue * 4, newValue * 5]
    },[number])
    return (
        <div style={cssStyle}>
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
          <PrintTable calculateTable={calculateTable} />
          <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}