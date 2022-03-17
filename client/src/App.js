import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Management from './Components/Management/Management'
import { BrowserRouter ,Routes, Route, Navigate, Redirect } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const base_url = window.location.protocol + "//" + window.location.host;
  const [user, setUser] = useState(undefined);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path='/management' element={<Management/>}/>

          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
