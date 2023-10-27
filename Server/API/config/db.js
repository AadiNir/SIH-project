const mongoose = require('mongoose');
const connectdb =async()=>{
    try{
        await mongoose.connect('mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/');
        console.log('database connected successfully');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = connectdb;