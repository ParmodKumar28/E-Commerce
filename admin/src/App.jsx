import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

// Parent App Functional Component Rendring Children
const App = () => {
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  )
}

export default App