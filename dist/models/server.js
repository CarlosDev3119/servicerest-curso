"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.port = process.env.PORT || 8080;
        this.app = (0, express_1.default)();
    }
    middlewares() {
        //cors domain
        this.app.use((0, cors_1.default)());
        //parse body
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port: ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map