import './App.css'
import PaymentsListRemote from './PaymentsListRemote'
import PaymentsAddRemote from './PaymentsAddRemote'


function App() {

  return (
    <>
      <h1>This is the Container</h1>
      <PaymentsListRemote />
      <hr/>
      <PaymentsAddRemote />
    </>
  )
}

export default App