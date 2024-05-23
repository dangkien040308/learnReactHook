import UsingStateHook from './hooks/useState'
import './App.css'
import UsingEffectHook from './hooks/useEffect'
import UsingRefHook from './hooks/useRef'
import UsingContextHook from './hooks/useContext'
import UsingReducerHook from './hooks/useReducer'
import UsingLayoutEffectHook from './hooks/useLayoutEffect'
import UsingMemoHook from './hooks/useMemo'
import UsingCallBackHook from './hooks/useCallback'
import CustomHook from './hooks/customHook'

function App() {

  return (
    <>
    <div>
      React Hook
    </div>
     <UsingStateHook />
     <UsingEffectHook />
     <UsingContextHook />
     <UsingRefHook />
     <UsingReducerHook />
     <UsingLayoutEffectHook />
     <UsingMemoHook />
     <UsingCallBackHook />
     <CustomHook />
    </>
  )
}

export default App
