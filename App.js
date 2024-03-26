import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import Events from "./components/events/Events"
import Stati from "./components/stati/Stati"
import Products from "./components/products/Products"
import Contacts from "./components/contacts/Contacts"
import Pross from "./components/pross/Pross"
function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>n
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/stati" element={<Stati/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/pross" element={<Pross/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
