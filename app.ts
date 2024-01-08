import express,{Request,Response} from "express";
import  todosroute from "./router/todos";

const app=express();
const port=8081;
app.use(todosroute)
app.use(express.json());

app.listen(port,()=>{
    console.log(`port is listen on ${port}`)
})