import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCallbackComp from './components/useCallbackComp/UseCallbackComp'
import UseRefComp from './components/useRefComp/UseRefComp'
import UseMemoComp from './components/useMemoComp/useMemoComp'
import Debounce from './components/useDebounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning Hooks</h1>
      {/* <UseCallbackComp></UseCallbackComp> */}
      {/* <UseRefComp></UseRefComp> */}
      {/* <UseMemoComp></UseMemoComp> */}
      <Debounce></Debounce>
      hello
    </>
  )
}

export default App
