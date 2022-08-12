import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Terms from './components/Terms/Terms';
import { BrowserRouter ,Route, Router, Routes} from 'react-router-dom';
import Policy from './components/Policy/Policy';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      
      <Routes>
      
      <Route path='/Terms' element={<Terms/>} />
      <Route path='/Policy' element={<Policy/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
