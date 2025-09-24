
import './App.css'
import Content from './conponents/content/Content'
import Menu from './conponents/menu/Menu'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='container'>
      <Menu bool={isOpen} />
      <Content isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
