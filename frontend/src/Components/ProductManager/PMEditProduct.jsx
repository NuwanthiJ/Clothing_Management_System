import React, {useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Sidebar from './PMSidebar'
import Header from './PMHeader'
import './PMSidebar.css'
import './PMEditProduct.css'
import {useParams } from 'react-router-dom'
import axios from "axios"
import {toast } from 'react-toastify';

export default function PMEditProduct() { 

    const products = {
        productID:"",
        productName:"",
        description:"",
        category:"",
        quantity:"",
        size:"",
        price:"",
        // image:""
    }

    const {id} = useParams();

    const navigate = useNavigate();

    const [product , setProduct] = useState(products);
    

    useEffect(() => {
        if(id) {
            getById(id);
        }
        
    }, [id]);

    const getById = async (id) => {
        const response = await axios.get(`http://localhost:3000/api/product/${id}`);
        if(response.status === 200) {
            setProduct({...response.data});
            console.log(product);
        }
    }

    const updateProduct = async (data , id) => {
        const response = await axios.put(`http://localhost:3000/api/product/${id}` , data);
        if(response.status === 200) {
            toast.success(response.data);
            alert("Product Updated successfully");
        }
    }

    const inputChangeHandler = (e) => {
          const {name , value} = e.target;
          setProduct({...product , [name]: value});
          console.log(product);
    }


    const submitForm = (e) => {
        if(window.confirm("Are you sure that you wanted to update that product record")) {
        e.preventDefault();
        if(id) {
            updateProduct(product, id);
            navigate("/pmallproduct");
        }
      }
    };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  return (
    <React.Fragment>
    <div className="App"> 
    <div className='pmadd-grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div>
    <center>
    <form onSubmit={submitForm}>
        <div class="form-bg">
            <div class="form-container">
            {/* <Link to="/pmallproduct"><button classname="back"><h6>Back</h6></button></Link> */}
                <h3 class="title">Edit Product</h3>
                    <div  class="form-horizontal">
                    <div class="form-group">
                            <div class="ap-col-25"><label>Product ID</label></div>
                            <div class="ap-col-75"><input type="text" name="productID" onChange={inputChangeHandler} value={product.productID} class="form-control" autoComplete='on' placeholder="ID" /></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Product Name</label></div>
                            <div class="ap-col-75"><input type="text" name="productName" onChange={inputChangeHandler} value={product.productName} class="form-control" placeholder="Name" /></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Category</label></div>
                            <div class="ap-col-75"><select class="form-select" name="category" onChange={inputChangeHandler} value={product.category} >
                                <option value="None">None</option>
                                <option value="Women crop-top">Women crop-top</option>
                                <option value="Women blouse">Women blouse</option>
                                <option value="Women office wear">Women office wear</option>
                                <option value="Women top">Women top</option>
                                <option value="Women top">Women top</option>
                                <option value="Women top">Women top</option>
                                <option value="Men t-shirt">Men t-shirt</option>
                                <option value="Men shorts">Men shorts</option>
                                <option value="Men Shirt">Men Shirt</option>
                                <option value="Men trousers">Men trousers</option>
                                <option value="Men office wear">Men office wear</option>
                                <option value="Men t-shirt">Men t-shirt</option>
                            </select></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Quantity</label></div>
                            <div class="ap-col-75">
                                <input type="number" name="quantity" onChange={inputChangeHandler} value={product.quantity} class="form-control" placeholder="Amount" /></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label htmlFor="size">Sizes</label></div>
                            <div class="ap-col-75">
                            <select class="form-select" name="size" onChange={inputChangeHandler} value={product.size} >
                                <option value="None">None</option>
                                <option value="S,M,L,XL">S,M,L,XL</option>
                                <option value="S,M,L">S,M,L</option>
                                <option value="S,M">S,M</option>
                                <option value="S,L">S,L</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="M,L">M,L</option>
                                <option value="L,XL">L,XL</option>
                            </select></div>
                        </div>

                        <div class="form-group">
                            <div class="ap-col-25"><label>Price</label></div>
                            <div class="ap-col-75">
                                <input type="number" name="price" onChange={inputChangeHandler} value={product.price}  class="form-control" placeholder="Price" /></div>
                        </div>
                        {/* <div class="form-group">
                            <div class="ap-col-25"><label>Image</label></div>
                            <div class="ap-col-75">
                                <input type="file" class="form-control" name="image" onChange={inputChangeHandler} value={image}  multiple="multiple" accept="image/png, image/jpeg"/>
                            </div>
                        </div> */}
                        <div class="form-group">
                            <div class="ap-col-25"><label>date</label></div>
                            <div class="ap-col-75"><input type="date" name="description" onChange={inputChangeHandler} value={product.description}  class="form-control" placeholder="Description" /></div>
                        </div>
                        <input type="submit" class="btn add" value="Update"/>
                    </div>
                </div>
        </div>
    </form>
</center>
    </div>
    </div>
    </div>
    </React.Fragment>
  );
}


