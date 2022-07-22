import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Donate from "./components/Donate";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Support from "./components/support";
import "./style.css";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        {/* Шапка */}
        <header>
          <Nav />
        </header>
        {/* Пути ссылки */}
        <div className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
        </div>
        {/* Подвал сайта */}
        <footer>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
