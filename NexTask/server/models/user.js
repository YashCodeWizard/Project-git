const mongoose=require("mongoose");

const Schema=mongoose.Schema;


const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tasks:[{
        type:Schema.Types.ObjectId,
        ref:"Task",  //which models id you want to store
        
    },],

});


module.exports=mongoose.model("User",userSchema);
