import Payment from "../models/payment.model.js"

const createPayment = async (req, res) => {
    try {
        const {paymentID, name, PhoneNo, postalCode, address, email} = req.body
        
        const newPayment = new Payment({
            paymentID, name, PhoneNo, postalCode, address, email
        })
        await newPayment.save()
        res.status(200).json({success:true, message:'Payment created successfully!', newPayment})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const getPayment = async(req, res) => {
    try {
        const payment = await Payment.find()
        if(!payment) {
            return res.status(404).json({success:false, message:'Payment not found!'})
        }
        res.status(200).json({success:true, payment})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const updatePayment = async(req, res) => {
    try {
        const paymentID = req.params.id
        const updatePayment = await Payment.findByIdAndUpdate(paymentID, req.body, {new:true})

        if(!updatePayment) {
            return res.status(404).json({success:false, message:'Payment not found!'})
        }
        res.status(200).json({success:true, message:'Payment Updated Successfully!', updatePayment})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

const deletePayment = async (req, res) => {
    try {
        const paymentID = req.params.id
        const deletePayment = await Payment.findByIdAndDelete(paymentID)
        
        if(!deletePayment) {
            return res.status(404).json({success:false, message:'Payment not found!'})
        }
        res.status(200).json({success:true, message:'Payment Deleted Successfully!', deletePayment})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }
}

const getById  = async (req,res,next) => {

    try{
        const paymentId = req.params.id;
        const viewPayment = await Payment.findById(paymentId);

        if(!viewPayment){
            return res.status(404).json({success:false, message:"Payment Not Found"});
        }
        return res.status(200).json(viewPayment);
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }

};

export {createPayment, getPayment, updatePayment, deletePayment,getById}