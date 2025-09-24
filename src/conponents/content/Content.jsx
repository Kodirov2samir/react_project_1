import "./Content.css"
import { CiCircleChevLeft } from "react-icons/ci"

function Content({ isOpen, setIsOpen }) {
  return (
    <main className='site-main'>
      <div>
        <span className='icon' onClick={() => setIsOpen(false)}>
          <CiCircleChevLeft />
        </span>
        <span className='icon-well' onClick={() => setIsOpen(true)}>
          --ar
        </span>
      </div>
      <h1>Main content goes here</h1>
    </main>
  )
}

export default Content