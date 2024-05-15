import Sales from "../models/sales.model.js"

const createSales = async (req, res) => {
    try {
        const {salesID, reportType, Date,ReportDes} = req.body
        
        const newSales = new Sales({
            salesID, reportType, Date,ReportDes
        })
        await newSales.save()
        res.status(200).json(newSales)
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const getSales = async(req, res) => {
    try {
        const sales = await Sales.find()
        if(!sales) {
            return res.status(404).json({success:false, message:'Sales not found!'})
        }
        res.status(200).json(sales)
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const updateSales = async(req, res) => {
    try {
        const salesID = req.params.id
        const updateSales = await Sales.findByIdAndUpdate(salesID, req.body, {new:true})

        if(!updateSales) {
            return res.status(404).json({success:false, message:'Sales not found!'})
        }
        res.status(200).json(updateSales)
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const deleteSales = async (req, res) => {
    try {
        const salesID = req.params.id
        const deleteSales = await Sales.findByIdAndDelete(salesID)
        
        if(!deleteSales) {
            return res.status(404).json({success:false, message:'Sales not found!'})
        }
        res.status(200).json(deleteSales)
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }
}

const getById  = async (req,res,next) => {

    try{
        const salesID = req.params.id;
        const viewSales = await Sales.findById(salesID);

        if(!viewSales){
            return res.status(404).json({success:false, message:"Sales Not Found"});
        }
        return res.status(200).json(viewSales);
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }

};

export {createSales, getSales, updateSales, deleteSales,getById}