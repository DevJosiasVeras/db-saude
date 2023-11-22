"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var prismaClient_1 = require("./database/prismaClient");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.get('/', function (req, res) {
    res.send('Api is running');
});
app.get('/planos', function (req, res) {
    prismaClient_1.prismaClient.plano.findMany()
        .then(function (result) { return res.json(result); })
        .catch(function (error) { return res.json(error); });
});
app.get('/medicos', function (req, res) {
    prismaClient_1.prismaClient.medico.findMany()
        .then(function (result) { return res.json(result); })
        .catch(function (error) { return res.json(error); });
});
app.listen(4003, function () { return console.log('Server is running in http://localhost:4003'); });
