import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import 'aos/dist/aos.css'

import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import Personagens from "./pages/Personagens/Personagens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Combate from "./pages/Combate/Combate";

function App() {
AOS.init();

  return (
    <BrowserRouter className="App">
        <GlobalStyle/>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ficha" element={<Personagens/>} />
        <Route path="/combate" element={<Combate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
