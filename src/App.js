import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import NavBar from './component/navBar/navBar';

function App() {
  return (
   <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
        </Routes> 
      </BrowserRouter>
   </div>
  );
}
export default App;
