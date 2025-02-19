import "./App.css";
import Cards from "./components/Cards";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import NewCard from "./components/NewCard";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-card" element={<NewCard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
