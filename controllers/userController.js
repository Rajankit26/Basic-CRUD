const User = require("../model/userModel")

exports.home = (req,res)=>{
    res.send("hello from backend!")
}

// create route for user ceation
exports.createUser = async (req,res)=>{
    try {
        const {name, email} = req.body;

        if(!name || !email){
            throw new Error("Name and Email are required")
        }

        const useExists = await User.findOne({email})

        if(useExists){
            throw new Error("Email already exist")
        }

        const newUser = await User.create({
            name,
            email,
        })

        res.status(200).json({
            success : true,
            msg : "User Created Successfully",
            newUser
        });

    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            success : false,
            msg : error.msg
        });
    }
};

// create route for geting all user info
exports.getUser = async (req,res) => {
   try {

    const allUserData = await User.find({});
    
    res.status(200).json({
        success : true,
        allUserData
    })
   } catch (error) {
    console.error(error);
    res.status(400).json({
        success : false,
        msg : error.msg
    })
   }
}

// create route to update user 
exports.updateUser = async (req,res)=> {
    try {
       

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
    {   
        new : true
    }
)
        if(!updatedUser){
            throw new Error("User does not exist")
        }
        res.status(200).json({
            success : true,
            msg : "user updated successfully",
            updatedUser
        })
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(400).json()
    }
}