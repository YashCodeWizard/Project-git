const task=require("../models/tasks");

const addTask=async(req,res)=>{
    try {
        const {title,description,priority,status}=req.body;
        const {user}=req;
        if(!title || !description){
            return res.status(400).json({error:"All fields are required!"});
        }
        if(title.length<6){
            return res.status(400).json({error:"title must have 6 characters"});
        }
        if(description.length<6){
            return res.status(400).json({error:"description must have 6 characters"});
        }
        const newTask=new task({title,description,priority,status});
        await newTask.save();
        user.tasks.push(newTask._id);
        await user.save();
        return res.status(200).json({success:"Task added"});
        
    } catch (error) {
        return res.status(404).json({error:"Internal server error"});
    }
};

//for edit task 

const editTask=async(req,res)=>{
    try {
        const {id}=req.params; //for particular task to edit by id
        const {title,description,priority,status}=req.body;
        // const {user}=req.user;
        if(!title || !description){
            return res.status(400).json({error:"All fields are required!"});
        }
        if(title.length<6){
            return res.status(400).json({error:"title must have 6 characters"});
        }
        if(description.length<6){
            return res.status(400).json({error:"description must have 6 characters"});
        }
        await task.findByIdAndUpdate(id,{title,description,priority,status});
        return res.status(200).json({success:"Task added"});
        
    } catch (error) {
        return res.status(404).json({error:"Internal server error"});
    }
};


//getTask

const getTask=async(req,res)=>{
    try {
        const {id}=req.params;

        const taskDetails=await task.findById(id);
        return res.status(200).json({taskDetails});
        
    } catch (error) {
        return res.status(404).json({error:"Internal server error"});
    }
};

//delete task

const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params;

        await task.findByIdAndDelete(id);
        return res.status(200).json({success:"task deleted"});
        
    } catch (error) {
        return res.status(404).json({error:"Internal server error"});
    }
};


module.exports={addTask,editTask,getTask,deleteTask};