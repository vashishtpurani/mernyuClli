import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

const App = ()=> {
  return (
    <Router>  
      {/* <NavBar/> */}
      <div class      Name="App">
        <Routes>
            <Route path="/nav" element={<NavBar/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
