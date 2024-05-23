// Syntax :  const variableName = useRef(initialValue) , use ref prop to access a DOM element
// useRef allow us to access DOM elements
// Its aim to create mutable variables which will not re-render the component

import { useEffect, useRef, useState } from "react"

export default function UsingRefHook() {
    const [name , setName] = useState('')
    const count = useRef(0)

    useEffect( () => {
        count.current = count.current + 1 
    })
    
    const inputElement = useRef()
    const handleClick = () => {
      inputElement.current.style.width = '400px'
      inputElement.current.focus()
    }
    return (
        <div>
           <div>
             <input type="text" onChange={e => setName(e.target.value)} />
             <h3>Name : {name}</h3>
             <h3>Count : {count.current} </h3>
           </div>
           <div>
             <input type="text" ref={inputElement} />
             <button onClick={handleClick}>Click</button>
           </div>
        </div>
    )
}