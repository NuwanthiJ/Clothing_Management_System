import Admins from "../models/admins.model.js"

//Insert
const addAdmin = async (req, res) => {
    try {
        const {admin_username, admin_password, admin_type} = req.body
        
        const newAdmin = new Admins({
            admin_username, admin_password, admin_type
        })
        await newAdmin.save()
        res.status(200).json(newAdmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

//Display
const getAdmin = async(req, res) => {
    try {
        const admin = await Admins.find()
        if(!admin) {
            return res.status(404).json({message:'Admin not found!'})
        }
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal Server Error'})
    }
}


export {addAdmin,getAdmin}