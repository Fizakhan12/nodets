import express from "express";
const router=express.Router();
import {Todo} from "../model/todo"
const todo:Todo[]=[];
router.get("/",(req,res,next)=>{
    res.status(200).json({todos:todo});
})
type requesParams={todoId:string}
router.post("/todo",(req,res,next)=>{
    const data:Todo={
        id:12,
        text:"fiza"
    }
    todo.push(data);
    res.status(200).send(data);
})
router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requesParams //type casting i am using here
    const tId=params.todoId;
    // const todoIndex=todo.findIndex((todoItem )=>todoItem.id === tId)
  res.status(200).json({message:"put successfully",tId});
})
router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requesParams
    const tId=params.todoId;
    // const todoIndex=todo.findIndex((todoItem )=>todoItem.id === tId)
  res.status(200).json({message:"delete successfully",tId});
})
export default router;