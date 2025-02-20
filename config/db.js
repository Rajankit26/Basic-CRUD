
const mongoose = require("mongoose");

const connectToDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to DB Successfully! : ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error :${error}`);
        process.exit(1);
    }
};

module.exports = connectToDB;
