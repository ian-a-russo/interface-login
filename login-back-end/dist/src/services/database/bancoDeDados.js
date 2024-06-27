"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var Pool = require("pg").Pool;
var pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Login",
    password: "120506",
    port: 5432,
});
exports.pool = pool;
//# sourceMappingURL=bancoDeDados.js.map