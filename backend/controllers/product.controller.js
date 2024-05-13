import Product from "../models/product.model.js"

//Insert
const addproduct = async (req, res) => {
    try {
        const {productID, productName, description, category, quantity, size, price, image} = req.body
        
        const newProduct = new Product({
            productID, productName, description, category, quantity, size, price, image
        })
        await newProduct.save()
        res.status(200).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

//Display
const getProduct = async(req, res) => {
    try {
        const product = await Product.find()
        if(!product) {
            return res.status(404).json({message:'Product not found!'})
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal Server Error'})
    }
}

//Update
const updateProduct = async(req, res) => {
    try {
        const productId = req.params.id
        const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {new:true})

        if(!updateProduct) {
            return res.status(404).json({success:false, message:'Product not found!'})
        }
        res.status(200).json(updateProduct)
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}


//Delete
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const deleteProduct = await Product.findByIdAndDelete(productId)
        
        if(!deleteProduct) {
            return res.status(404).json({success:false, message:'Product not found!'});
        }
        res.status(200).json({message: "Product Deleted Successfully!"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'});
    }
}

//getID 
const getById  = async (req,res,next) => {

    try{
        const productId = req.params.id;
        const viewProduct = await Product.findById(productId);

        if(!viewProduct){
            return res.status(404).json({success:false, message:"product Not Found"});
        }
        return res.status(200).json(viewProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }

};

export {addproduct, getProduct, updateProduct, deleteProduct,getById}