import { HashRouter, BrowserRouter, Routes, Route, hashHistory } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <HashRouter history={hashHistory} basename="/epfm-dashboard">
      <Routes>
        <Route path='/' element={<div>homeee</div>} />
        <Route path='/testing' element={<div>TESTTTING</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App


{/* <BrowserRouter basename="/epfm-dashboard">
  <Routes>
    <Route path='/' element={<div>homeee</div>} />
    <Route path='/testing' element={<div>TESTTTING</div>} />
  </Routes>
</BrowserRouter> */}
