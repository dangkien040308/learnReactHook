import { useState } from "react"

// useState example , review
export default function UsingStateHook() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    return (
        <> 
         <div>
           <p>{count}</p>
           <button onClick={() => setCount(count + 1)}>Increase</button> 
        </div>
        <div>
          <input value={input} onChange={ e => setInput(e.target.value) } />
           <button onClick={() => { 
                setItems(prev => [...prev,input]) 
            }}>Add</button>
           <button onClick={() => setItems(prev => prev.slice(1))}>Remove</button>
           <ul>
           {items?.map((item, key) => (
                <li key={key}>{item}</li>
            ))}
           </ul>
        </div> 
        </>
        
    )
}