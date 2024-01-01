const { boolean } = require("zod");

const mongoose =  require(mongoose);

mongoose.connect("mongodb+srv://admin:abhi04@cluster0.ugz7nnh.mongodb.net/todos")

const todoSchema  = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model("todo",todoSchema)

module.exports({
    todo
})