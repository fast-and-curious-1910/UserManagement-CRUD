"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
dotenv_1.config({ path: '../.env' });
const app = express_1.default();
const port = 3000;
app.use(require('morgan')('dev'));
app.use(require('body-parser')({ extended: true }));
app.set('view engine', 'ejs');
app.use('/css', express_1.default.static(path_1.default.resolve(__dirname, 'assets/css')));
app.use('/js', express_1.default.static(path_1.default.resolve(__dirname, 'assets/js')));
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(req.baseUrl);
});
app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}/`);
});
//# sourceMappingURL=index.js.map