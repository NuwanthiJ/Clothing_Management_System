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
import PM_payment from './Components/Payment/Payment';
import PM_Card from  './Components/Payment/CardDetails'
import P_header from './Components/PaymentManager/PHeader';
import P_side from './Components/PaymentManager/PSidebar';
import P_add from './Components/PaymentManager/PAddSales';
import P_home from './Components/PaymentManager/PHome';
import P_dashboard from './Components/PaymentManager/PDashboard';
import P_main from './Components/PaymentManager/Pmain'; // Check the file path and component name
import P_all from './Components/PaymentManager/PAllSales';
import P_Edit from './Components/PaymentManager/PEditSale';

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


        {/*Payment manager*/}


        <Route path='/payment' element={<PM_payment/>}/>
        <Route path='/card' element={<PM_Card/>}/>
        <Route path='/header' element={<P_header/>}/>
        <Route path='/sidebar' element={<P_side/>}/>
        <Route path='/padd' element={<P_add/>}/>
        <Route path='/phome' element={<P_home/>}/>
        <Route path='/pdashboard' element={<P_dashboard/>}/>
        <Route path='/pmain' element={<P_main />} />
        <Route path='/pallsale' element={<P_all />} />
        <Route path='/pedit/:id' element={<P_Edit />} />
          
             
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;