const mongoose=require("mongoose");



const conn = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log("Connected to database");
    }
    catch(error){
        //console.log(error);
        console.log("Not Connected to database");


    }
    
};

conn();