import LoginContextProvider from "./context/reactContext"
import Component1 from "./useContextTest/Component1"


// useContext Hook is used to manage global data in react application
// Create context requires 3 simple steps : 
// 1. Creating the context
// 2. Providing the context
// 3. Consuming the context

export default function UsingContextHook() {

    return (
       <LoginContextProvider>
          <Component1 />
       </LoginContextProvider>
    )
}