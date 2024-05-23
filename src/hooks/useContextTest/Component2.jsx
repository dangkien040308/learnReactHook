import { useContext } from "react"
import { ReactContextProvider } from "../context/reactContext"


export default function Component2() {
    const data = useContext(ReactContextProvider)
    return (
        <div>
           <strong>{data}</strong> Component 2
        </div>
    )
}