const express =  require('express');
const {createTodo , updateTodo} = require('./types')

const {todo} = require("./db")

const app = express();

app.use(express.json());

app.post('/todos',async function(req,res){
   const createpayload = req.body;
   const response = createTodo.safeParse(createpayload);

    if(!response.success){
        res.status(403).json({
            msg:"Input is Not correct"
        })
    }else{
        return;
    }
    await todo.create({
        title : createpayload.title,
        description: createpayload.description,
        completed: false
    })

    res.json({
        msg:"Created Todo"
    })
})

app.get('/todos', async function(req,res){
    const todos =  await todo.find({});

    res.json({
        todos
    })

})

app.put('/completed',async function(req,res){
    const updatepayLoad = req.body;
    const response  =  updateTodo.safeParse(updatepayLoad);
    if(!response.success){
        res.status(403).json({
            msg:"Input is Not correct"
        })
    }else{
       return;
    }

    todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Updated Todo"
    })
})


app.listen(3000,function(){
    console.log("Listining to port" + 3000);
})

