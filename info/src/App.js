
import './App.css';
import Home from './components/Home';
import Feedback from './components/Feedback';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { About } from './components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter >

      <Navbar/>
             
       
        <Routes>
     
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/feedback' element={<Feedback/>}>Feedback</Route>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/about' element={<About/>}>About</Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
