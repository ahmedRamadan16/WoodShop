import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar/TopNavbar';
import NavBar from './components/Navbar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/main-ltr.scss';
import Home from './pages/Home.jsx';
import Footer from './components/Footer/Footer';
import About from './pages/About';

function App() {
  return (
  <>
  <BrowserRouter>
  <TopNavbar />
  <NavBar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} /> 

  </Routes>
  <Footer />
  </BrowserRouter>

  </>

  );
}

export default App;
