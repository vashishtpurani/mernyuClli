import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import CreateD from "./components/createD"

const App = ()=> {
  return (
    <Router>  
      {/* <CreateD/> */}
      {/* <NavBar/> */}
      <div class      Name="App">
        <Routes>
            <Route path="/nav" element={<NavBar/>}/>
            <Route path="/crt" element={<CreateD/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
