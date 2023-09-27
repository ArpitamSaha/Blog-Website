import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
