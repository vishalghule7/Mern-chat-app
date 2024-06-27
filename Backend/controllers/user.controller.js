import User from "../models/user.models.js";

export const getUserForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id : {$ne: loggedInUserId}}).select("-password"); 
        // if you want to show yourself also then dont add this condition _id : {$ne: loggedInUserId.
        
        res.status(200).json(filteredUsers);
        
    } catch (error) {
        
        console.error("Error in user controller", error.message)
        res.status(500).json({error: "internal server error"});
    }
}