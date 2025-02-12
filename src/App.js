import './App.css';
import AboutScreen from './Screens/AboutScreen';
import LoginScreen from './Screens/LoginScreen';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginScreen/> }/>
        <Route path="/about" element={<AboutScreen/> }/>
      </Routes>
    </div>    
  );
}

export default App;
