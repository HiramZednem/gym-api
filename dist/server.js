"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.middlewares();
        this.routes();
    }
    configuration() {
        this.app.set('port', config_1.PORT || 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                name: 'API GYM2024'
            });
        });
        this.app.use('/api/gym', routes_1.routes.GymRoutes);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}
exports.Server = Server;
