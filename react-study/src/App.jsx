import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomRouter from "./router/CustomRouter";
import Header from "common/components/Header";
import Clock from "common/components/Clock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
