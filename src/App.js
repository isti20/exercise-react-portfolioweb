import './App.css';
import Header from './components/home/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from './components/pageContent/HomePages';
import Footer from './components/home/Footer';
import Pages from './components/pages/Pages';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />}/>
          <Route path="/pages" element={<Pages />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
