import './App.css';
import Navbar from './Layout/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Admlogin from './Pages/Admlogin';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={ <Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='admin' element={<Admlogin/>}/>
          </Route>
          </Routes>
          </Router>
    </>
  );
}

export default App;
