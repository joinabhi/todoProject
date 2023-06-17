const ToDo=require('../model/item');

exports.addTodo = async(req, res, next)=>{
    const name = req.body.name;
    const description = req.body.description;
    const data = await ToDo.create({
        name:name,
        description:description
        
    });
    res.status(201).json({todoDetails:data})
}

exports.getTodo = async(req, res, next)=>{
    const todos=await ToDo.findAll();
    res.status(200).json({alltodos:todos})
}

exports.deleteTodo = async(req, res, next)=>{
    const todoId=req.params.id;
    try{
        await ToDo.destroy({where:{id:todoId}})
        res.status(200).json({message:'todo deleted successfully'})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}