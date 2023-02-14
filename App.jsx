import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/MAIN/LandingPage';
import Header from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';

function App() {
  return (
    <div className='App '>
        <Header />
      <main className=''>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </main>
        <Footer />
    </div>
  );
}

export default App;
