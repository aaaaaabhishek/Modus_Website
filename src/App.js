import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Link,Router, Route, Routes } from 'react-router-dom';
import Why_modus from './Pages/Why_modus';
import Our_voices from './Pages/Our_voices';
import What_employee_say from './Pages/What_employee_say';
import Career_path from './Pages/Carreer_path';
import Job_Openings from './Pages/Job_openings';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Home/>}/>
   <Route path='/Our_voices' element={<Our_voices/>}/>
   <Route path='/Why_modus' element={<Why_modus/>}/>
<Route path='/what_employee_say' element={<What_employee_say/>}/>
<Route path='/Career_path' element={<Career_path/>}/>
<Route path='/Job_Openings' element={<Job_Openings/>}/>

     </Routes>
       </BrowserRouter>

  );
}

export default App;
