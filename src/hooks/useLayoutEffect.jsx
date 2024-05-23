
// useLayoutEffect works exactly the same as useEffect
// But the different is ' When it's run '
// useEffect runs after the DOM is printed on the browser
// useLayoutEffect runs before before the DOM is printed on the browser
// Whenever we want to run code before the DOM is printed 
// use when measure the width , height or anything related to layout
// useLayoutEffect runs synchronously (dong bo) 

import { useLayoutEffect, useRef, useState } from "react"

export default function UsingLayoutEffectHook() {
    const [toggle , setToggle] = useState(false)
    const item = useRef()
    useLayoutEffect( () => {
       if (toggle) {
        const dimension = item.current.getBoundingClientRect()
        console.log(dimension)
        item.current.style.paddingTop = `${dimension.top}px`
       }
    },[toggle])
    return (
        <div>
          <button onClick={() => setToggle(!toggle)} >Toggle</button>
          <div ref={item}>{toggle && 'Toggle is true'}</div>
        </div>
    )
}