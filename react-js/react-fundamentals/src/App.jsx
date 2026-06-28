import React from 'react'
import Contact from './components/props-state/contact'
// import Three from './components/props-state/test'
// import { Four } from './components/props-state/test'
import Three,{Four} from './components/props-state/test'

const App = () => {

  // ### function call
  // Contact()
  // Three()
  // Four()
  return (
    <div>
      <h1>I am App</h1>
      {/* calling component as simple javascript function call */}
      {/* {Contact()} */}

      {/* calling component as an jsx compiled function call, it helps in HMR */}
      <Contact />
      <Three/>
      <Four />
    </div>
  )
}

export default App