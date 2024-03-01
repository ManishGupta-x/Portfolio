import "./main.css"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import { Jarvis } from "./components/Jarvis";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element=<App /> />
      <Route path="/jarvis" element = <Jarvis/>/>
    </Routes>
   </BrowserRouter>,
    document.getElementById('root'),
  );
