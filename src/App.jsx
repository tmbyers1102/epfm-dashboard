import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/epfm-dashboard/' element={<div>homeee</div>} />
        <Route path='/epfm-dashboard/testing' element={<div>TESTTTING</div>} />
      </Routes>
    </BrowserRouter>

    // <div className='bg-amber-500 w-full h-48'>
    //   <h2>EPFM Dashboard</h2>
    // </div>
  )
}

export default App
