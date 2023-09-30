import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blog1 from './Components/Cards/Blogs/Blog1';
import Blog2 from './Components/Cards/Blogs/Blog2';
import Blog3 from './Components/Cards/Blogs/Blog3';
import Blog4 from './Components/Cards/Blogs/Blog4';

function App() {
  return (
    <>

      <Navbar />
      <Banner />
    <Routes>
      <Route index element={<Cards />}/>
      <Route path='/blog1' element={<Blog1 />}/>
      <Route path='/blog2' element={<Blog2 />}/>
      <Route path='/blog3' element={<Blog3 />}/>
      <Route path='/blog4' element={<Blog4 />}/>
      <Route path='/blog1' element={<Blog1 />}/>
      <Route path='/blog1' element={<Blog1 />}/>
      <Route path='/blog1' element={<Blog1 />}/>
      
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
