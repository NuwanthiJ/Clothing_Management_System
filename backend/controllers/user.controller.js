import User from "../models/user.model.js"


const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Retrieve the latest user from the database to get the latest userID
        const latestUser = await User.findOne().sort({ userID: -1 });

        // Increment the userID
        const newUserID = latestUser ? latestUser.userID + 1 : 1;

        const newUser = new User({
            userID: newUserID, // Assign auto-generated userID
            email,
            password
        });

        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

//Display
const getUser = async(req, res) => {
    try {
        const user = await User.find()
        if(!user) {
            return res.status(404).json({message:'User not found!'})
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal Server Error'})
    }
}

//Update
const updateUser = async (req, res) => {
    try {
      const { email } = req.body; // Extract email from the request body
      const updatedUserData = req.body; // Assuming the updated user data is sent in the request body
  
      // Update the user using their email as the identifier
      const updatedUser = await User.findOneAndUpdate({ email }, updatedUserData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      return res.status(500).json({ message: 'Failed to update user. Please try again later.' });
    }
  };


//Delete
const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id
        const deleteUser = await User.findByIdAndDelete(userID)
        
        if(!deleteUser) {
            return res.status(404).json({success:false, message:'User not found!'});
        }
        res.status(200).json({message: "User Deleted Successfully!"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'});
    }
}

//getID 
const getById  = async (req,res,next) => {

    try{
        const userID = req.params.id;
        const viewUser = await User.findById(userID);

        if(!viewUser){
            return res.status(404).json({success:false, message:"USer Not Found"});
        }
        return res.status(200).json(viewUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'})
    }

};

export {createUser, getUser, updateUser, deleteUser,getById}