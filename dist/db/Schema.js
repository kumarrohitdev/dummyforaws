"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DummySchema = new mongoose_1.default.Schema({
    Name: {
        type: String
    },
    Password: {
        type: String
    }
});
exports.user = mongoose_1.default.model("userdata", DummySchema);
