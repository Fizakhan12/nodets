"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./router/todos"));
const app = (0, express_1.default)();
const port = 8081;
app.use(todos_1.default);
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`port is listen on ${port}`);
});
