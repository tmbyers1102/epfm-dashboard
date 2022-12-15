import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter basename="/epfm-dashboard">
      <Routes>
        <Route path='/' element={<div>homeee</div>} />
        <Route path='/testing' element={<div>TESTTTING</div>} />
      </Routes>
    </BrowserRouter>
    {/* <HashRouter>
      <Routes>
        <Route path='/epfm-dashboard/' element={<div>homeee</div>} />
        <Route path='/epfm-dashboard/testing/' element={<div>TESTTTING</div>} />
      </Routes>
    </HashRouter> */}
    </>

    // <div className='bg-amber-500 w-full h-48'>
    //   <h2>EPFM Dashboard</h2>
    // </div>
  )
}

export default App
