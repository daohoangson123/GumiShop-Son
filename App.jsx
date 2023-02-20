import { Routes, Route } from "react-router-dom";
import Header from './components/HEADER/Header';
import LandingPage from './components/MAIN/LandingPage';
import Footer from './components/FOOTER/Footer';
import BackTopBtn from './components/BACKTOPBTN/BackTopBtn';
import Shop from './components/FUNCTIONPAGES/Shop';
import BackTopWrapper from './components/BACKTOPWRAPPER/BackTopWrapper';
import './App.css';
import ProductDetail from "./components/RepeatComponent/ProductDetail";
import SignIn from "./components/FUNCTIONPAGES/SignIn";
import Regis from "./components/FUNCTIONPAGES/Regis";

function App() {
  return (
    <div className='App '>
        <Header />
      <main className=''>
      <BackTopWrapper>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/faq' element={<Shop/>} />
          <Route path='/stockist' element={<Shop/>} />
          <Route path='/wholesale' element={<Shop/>} />
          <Route path='/contact' element={<Shop/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/regis' element={<Regis/>} />
          <Route path='/cart' element={<Shop/>} />
          <Route path='/products/:id' element={<ProductDetail/>} />
        </Routes>
      </BackTopWrapper>
      </main>
        <Footer />
        <BackTopBtn />
    </div>
  );
}

export default App;
