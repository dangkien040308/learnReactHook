import { createContext } from "react"

export const ReactContextProvider = createContext();

const LoginContextProvider = ({ children }) => {
    return (
      <ReactContextProvider.Provider value={'useContext Hook'}>
        {children}
      </ReactContextProvider.Provider>
    );
  };
  
  export default LoginContextProvider;