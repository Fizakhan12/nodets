"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todo = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todo });
});
router.post("/todo", (req, res, next) => {
    const data = {
        id: 12,
        text: "fiza"
    };
    todo.push(data);
    res.status(200).send(data);
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params; //type casting i am using here
    const tId = params.todoId;
    // const todoIndex=todo.findIndex((todoItem )=>todoItem.id === tId)
    res.status(200).json({ message: "put successfully", tId });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tId = params.todoId;
    // const todoIndex=todo.findIndex((todoItem )=>todoItem.id === tId)
    res.status(200).json({ message: "delete successfully", tId });
});
exports.default = router;
