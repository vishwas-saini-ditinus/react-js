import "./App.css";
import AboutScreen from "./Screens/AboutScreen";
import LoginScreen from "./Screens/LoginScreen";
import { Routes, Route } from "react-router-dom";
import SignupScreen from "./Screens/SignupScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </div>
  );
}

export default App;
