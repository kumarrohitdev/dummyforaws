"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Schema_1 = require("./db/Schema");
const cors_1 = __importDefault(require("cors"));
const Database_1 = require("./db/Database");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//home route of the 
app.get("/", (req, res) => {
    res.send("<h1>Server started localy </h1>");
});
(0, Database_1.ConnectfunDb)();
// api route user
app.get("/api/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Name, Password } = req.body;
    yield Schema_1.user.create({
        Name: Name,
        Password: Password
    });
    res.status(200).json({
        message: "User created "
    });
}));
app.listen(80, () => {
    console.log(`Server started localy`);
});
