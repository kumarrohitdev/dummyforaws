"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectfunDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectfunDb = () => {
    mongoose_1.default
        .connect("mongodb://localhost:27017/AwsConnected")
        .then((e) => {
        console.log(`Database connected ${e.connection.host}`);
    })
        .catch((error) => {
        console.log(error.message);
    });
};
exports.ConnectfunDb = ConnectfunDb;
