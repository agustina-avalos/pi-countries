import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LandingPage from "./components/Landing"
import Home from './components/Home';
import Detail from "./components/Detail"
import Create from "./components/Create"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path='/' element= {<LandingPage/>} />
      <Route  path='/home' element= {<Home/>}  />
      <Route  path='/activity' element = {<Create/>}  />  
      <Route  path='/home/:id' element = {<Detail/>}  /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
