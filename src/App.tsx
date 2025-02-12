import "./App.css";
import Cards from "./components/Cards";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
