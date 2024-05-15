import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Login from './Pages/Login';
import AdminLogin from './Pages/AdminLogin';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import AllCart from './Pages/AllCart';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_womens.jpg'
import PM_Dashboard from './Components/ProductManager/PMDashboard';
import PM_AddProduct from './Components/ProductManager/PMAddProduct';
import PM_AllProduct from './Components/ProductManager/PMAllProduct';
import PM_EditProdct from './Components/ProductManager/PMEditProduct';

import OM_Dashboard from './Components/OrderManager/OMDashboard';
//import OM_Cartitemdetails from '.Components/OrderManager/OMCartitemdetails';
//import OM_OrderHistory from '.Components/OrderManager/OMOrderHistory';


function App() {

  return (
    <div>
      <BrowserRouter>
    
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/men"  element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/product" element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cartitems' element={<AllCart />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>

        {/* Product Manager */}

        <Route path='/pm_dashboard' element={<PM_Dashboard/>}/>
        <Route path='/addproduct' element={<PM_AddProduct/>}/>
        <Route path='/pmallproduct' element={<PM_AllProduct/>}/>
        <Route path="/pmeditproduct/:id" element={<PM_EditProdct/>}/>

        {/* Order Manager */}
        <Route path='/om_dashboard' element={<OM_Dashboard/>}/>
        {/*<Route path='/cartitemdetails' element={<OM_Cartitemdetails/>}/>
        <Route path='/orderhistory' element={<OM_OrderHistory/>}/>*/} 
          
             
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;