import React, {useState } from 'react'
import {useNavigate} from "react-router-dom"
import Sidebar from './PMSidebar'
import Header from './PMHeader'
import './PMSidebar.css'
import './PMAddProduct.css'
import axios from "axios"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function PMAddProduct() { 
    
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const initialstate = {
    productID : "",
    productName : "",
    description : "",
    category : "",
    quantity : "",
    size : "",
    price : "",
    image : []
}

  const [state, setState] = useState(initialstate);

  const {productID,productName,description,category,quantity,size,price,image} = state;

  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!productID || !productName || !description || !category || !size ||!quantity ||  !price || !image){
        toast.error("Please provide value into each input field");
    }else{
        const formData = new FormData();
        formData.append('productID', productID);
        formData.append('productName', productName);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('size', size);
        formData.append('quantity', quantity);
        formData.append('price', price);

        formData.append('image',  image);
        console.log(state.image);
        try{
            const response = await axios.post("http://localhost:3000/api/product/" , formData);
            console.log(response);
            if(response.status === 200){
                toast.success(response.formData);
                alert("Do You Want to Add New Product");
            }  
        } catch(error) {
            console.error(error)
        }
        
        
        navigate("/pmallproduct");
    }
  }
  
  const handleInputChange =(e)=> {
    const {name , value} = e.target;
    setState({...state, [name]:value});
    console.log(e.target.name , e.target.value);
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    setState({...state, image: file});
    console.log("file: ", file);
  }

  return (
    <React.Fragment>
    <div className="App"> 
    <div className='pmadd-grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div>
    <center>
    <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data" >
        <div class="form-bg">
            <div class="form-container">
                <h3 class="title">Add Products</h3>
                    <div  class="form-horizontal">
                    <div class="form-group">
                            <div class="ap-col-25"><label>Product ID</label></div>
                            <div class="ap-col-75"><input type="text" name="productID" onChange={handleInputChange} value={productID} class="form-control" placeholder="ID" required/></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Product Name</label></div>
                            <div class="ap-col-75"><input type="text" name="productName" onChange={handleInputChange} value={productName} class="form-control" placeholder="Name" required/></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Category</label></div>
                            <div class="ap-col-75"><select class="form-select" name="category" onChange={handleInputChange} value={category} required>
                                <option value="None">None</option>
                                <option value="Women crop-top">Women crop-top</option>
                                <option value="Women blouse">Women blouse</option>
                                <option value="Women Skirt">Women Skirt</option>
                                <option value="Women top">Women top</option>
                                <option value="Men T-Shirt">Men T-Shirt</option>
                                <option value="Men shorts">Men shorts</option>
                                <option value="Men Shirt">Men Shirt</option>
                                <option value="Men Sarong">Men Sarong</option>
                            </select></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Quantity</label></div>
                            <div class="ap-col-75">
                                <input type="number" name="quantity" onChange={handleInputChange} value={quantity}  class="form-control" placeholder="Amount" required/></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label htmlFor="size">Sizes</label></div>
                            <div class="ap-col-75">
                            <select class="form-select" name="size" onChange={handleInputChange} value={size} required>
                                <option value="None">Pick Size</option>
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
                                <input type="number" name="price" onChange={handleInputChange} value={price}  class="form-control" placeholder="Price" required/></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Date</label></div>
                            <div class="ap-col-75"><input type="date" name="description" onChange={handleInputChange} value={description}  class="form-control" placeholder="Description" /></div>
                        </div>
                        <div class="form-group">
                            <div class="ap-col-25"><label>Image</label></div>
                            <div class="ap-col-75">
                                <input type="file" class="form-control" name="image"  onChange={handleImage}  multiple="multiple" accept=".png, .jpg, .jpeg" required/>
                            </div>
                        </div>
                        <input type="submit" class="btn add" value="Submit"/>
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


