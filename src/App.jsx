import BtnIncrCounter from './components/counter/BtnIncrCounter'
import BtnResetCounter from './components/counter/BtnResetCounter'
import DisplayCounter from './components/counter/DisplayCounter'

function App() {
  

  return (
    <>
      <h1>Demo - State Management</h1>
      <DisplayCounter />
      <BtnIncrCounter />
      <BtnResetCounter />
    </>
  )
}

export default App
