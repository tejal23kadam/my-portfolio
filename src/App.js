import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import NavBar from './component/navBar/navBar';

function App() {
  return (
   <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
        </Routes> 
      </Router>
   </div>
  );
}
export default App;
