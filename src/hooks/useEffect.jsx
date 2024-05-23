import { useEffect, useState } from "react"

// useEffect( callback,dependencies )
// dependencies can be a value or a array of variables
// 1. useEffect( callback ) => callback will be called every time the component re-render
// 2. useEffect( callback,[] ) => callback will be called in the first time that component mount
// 3. useEffect( callback,[dependencies] ) => callback will be called in the first time that component mount or when the dependecies was changed

export default function UsingEffectHook() {
 
    const [count , setCount] = useState(0)
    useEffect(() => {
        document.title = `${count} click :))`
    },[count])
    return (
   
        <div>
           <div className="item">
             {count} clicked ... !
             <button onClick={() => setCount(count + 1)}>Increase</button>
           </div>

        </div>
    )
}