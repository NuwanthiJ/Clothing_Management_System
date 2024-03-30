import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Hero/>
      <Popular/>
      <Offers/>
      <Routes>
        <Route path='/' element={<home/>}/>
        <Route path="/women" element={<category category="women"/>}/>
        <Route path="/men"  element={<category category="men"/>}/>
        <Route path="/product" element={<product/>}>
             <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<login/>}/>
        <Route path='/signup' element={<signup/>}/>
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;