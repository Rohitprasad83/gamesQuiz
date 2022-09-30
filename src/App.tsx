import { Routes, Route } from 'react-router-dom'
import './App.css'
import {Home,LandingPage, Login, Signup,Error404} from './features/index'
function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
