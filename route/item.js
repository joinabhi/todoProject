const express=require('express');
const itemController=require('../controller/item');
const router=express.Router()

router.post('/user/add-todo', itemController.addTodo);

router.get('/user/get-todo', itemController.getTodo);

router.delete('/user/delete-todo/:id', itemController.deleteTodo);

module.exports=router;