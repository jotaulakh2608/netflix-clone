import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App  no-scrollbar">
   
   <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SignUp/>}/>  
          <Route path="/signIn" element={<SignIn />} />
        <Route path="/browse" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
