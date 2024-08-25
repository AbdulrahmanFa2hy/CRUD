import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Update from "./pages/update/Update";
import AddUser from "./pages/addUser/AddUser";

function App() {
  return (
    <div className="container">
      <header>
        <h1>CRUD With Redux Toolkit</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
