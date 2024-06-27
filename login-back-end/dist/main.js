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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var adicionarUsuario_1 = require("./src/services/api/adicionarUsuario");
var verificarSeUsuarioExiste_1 = require("./src/services/api/verificarSeUsuarioExiste");
var verificarSenha_1 = require("./src/services/api/verificarSenha");
var app = (0, express_1.default)();
var PORT = 5500;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(body_parser_1.default.json());
app.get("/users/:senha/:nome", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nomeUsuario, existeUsuario, senhaUsuario, senhaVerificada, erro_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nomeUsuario = req.params.nome;
                console.log("Nome do usuário:", nomeUsuario);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, verificarSeUsuarioExiste_1.verificarSeUsuarioExiste)(nomeUsuario)];
            case 2:
                existeUsuario = _a.sent();
                console.log("Usuário existe:", existeUsuario);
                senhaUsuario = req.params.senha;
                console.log("Senha fornecida:", senhaUsuario);
                return [4 /*yield*/, (0, verificarSenha_1.verificarSenha)(nomeUsuario, senhaUsuario)];
            case 3:
                senhaVerificada = _a.sent();
                console.log("Senha verificada:", senhaVerificada);
                if (existeUsuario == true && senhaVerificada == true) {
                    res.status(200).json(true);
                    return [2 /*return*/];
                }
                console.log("Usuário não encontrado.");
                res.status(200).json(false);
                return [2 /*return*/];
            case 4:
                erro_1 = _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, senha, usuarioExiste, erro_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nome = _a.nome, senha = _a.senha;
                console.log("Nome:", nome);
                console.log("Senha:", senha);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, verificarSeUsuarioExiste_1.verificarSeUsuarioExiste)(nome)];
            case 2:
                usuarioExiste = _b.sent();
                console.log("Usuário já existe:", usuarioExiste);
                if (usuarioExiste == true) {
                    res.json("Esse usuário já existe!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, adicionarUsuario_1.adicionarUsuario)(nome, senha)];
            case 3:
                _b.sent();
                console.log("Usuário adicionado com sucesso!");
                res.status(201).json("Usuário cadastrado com sucesso!");
                return [2 /*return*/];
            case 4:
                erro_2 = _b.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("Servidor rodando em http://127.0.0.1:".concat(PORT));
});
//# sourceMappingURL=main.js.map