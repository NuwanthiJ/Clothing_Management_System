import React, {useEffect, useRef, useState} from 'react';
import './PMAllProduct.css';
import Sidebar from './PMSidebar'
import Header from './PMHeader'
import './PMSidebar.css'
import axios from "axios"
import {  BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {useReactToPrint} from "react-to-print";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsFillArchiveFill} from 'react-icons/bs'
import { FaDownload } from "react-icons/fa";


function PMAllProduct  (props)  {

  const [data,setData] = useState([]);
  const [records,setRecords] = useState([]);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    const response = await axios.get("http://localhost:3000/api/product");
    if(response.status === 200){
      setData(response.data);
      setRecords(response.data);
    }
  };


  const Filter = (event) => {
    // setRecords(data.filter(f => f.category.toLowerCase().includes(event.target.value)))
    // setRecords(data.filter(f => f.productName.toLowerCase().includes(event.target.value)))
    setRecords(data.filter(f => f.productID.toLowerCase().includes(event.target.value)))
    // setRecords(data.filter(f => f.description.toLowerCase().includes(event.target.value)))
  }


  const deleteProduct = async (id) => {
    if(window.confirm("Are you sure that you wanted to delete that product record")) {
      const response = await axios.delete(`http://localhost:3000/api/product/${id}`);
      if(response.status === 200) {
        toast.success(response.data);
        alert("Product Deleted successfully");
        getProduct();
      }
    }
  }
  console.log("data=>" , data);

  const ComponentsRef =useRef();
  const handlePrint = useReactToPrint ({
    content: () => ComponentsRef.current,
    DocumentTitle: "Products Report",
    onafterprint:() => alert("Product Report Successfully Download !"),
  })


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <div>
      <div className="App"> 
        <div className='pmall-grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
           
           <div className="display-container" >
           <h3> All Products <BsFillArchiveFill className='pm-icon'/></h3>
           <button onClick={handlePrint} className='pmreport'><FaDownload /> Generate Report</button>
            <div className="productSearch">
              <input type="search" className="productSearchInput" id="search" onChange={Filter} placeholder='   Search here...'/>
            </div>
           <div ref={ComponentsRef}>
            <table className='product-table'>
              <thead className="pm-thead">
                <tr>
                    <th >No.</th>
                    <th >ID</th>
                    <th >Name</th>
                    <th >Category</th>
                    <th >Quantity</th>
                    <th >Size</th>
                    <th >Price</th>
                    <th >Date</th>
                    {/* <th style={{textAlign:"center"}}>Image</th> */}
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
              </thead>
              <tbody>
              {records.map((product, index)=> {
                  return(
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.productID}</td>
                      <td>{product.productName}</td>
                      <td>{product.category}</td>
                      <td>{product.quantity}</td>
                      <td>{product.size}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      {/* <td>{product.image}</td> */}
                      {/* <td><img src={product.image} alt=''/></td> */}
                      <td>
                        <span className="pm-actions">
                          <Link to={`/pmeditproduct/${product._id}`}>
                          <BsFillPencilFill className='pm-edit'/>
                          </Link>
                          <BsFillTrashFill onClick={() => deleteProduct(product._id)} className='pm-delete'/>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default PMAllProduct
