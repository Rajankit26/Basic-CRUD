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
