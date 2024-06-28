/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst domUtils_1 = __webpack_require__(/*! ./services/api/domUtils */ \"./src/services/api/domUtils.ts\");\nconst clientHTTP_1 = __webpack_require__(/*! ./services/api/clientHTTP */ \"./src/services/api/clientHTTP.ts\");\nconst usuarioLogin = (0, domUtils_1.buscarInput)(\"#nome-usuario\");\nconst senhaLogin = (0, domUtils_1.buscarInput)(\"#senha-usuario\");\nconst cadastrar = (0, domUtils_1.buscarSeletor)(\"#cadastrar\");\nconst dialogCadastrar = (0, domUtils_1.buscarModal)(\"#cadastrar-novo-usuario\");\nconst confirmarLogin = (0, domUtils_1.buscarSeletor)(\"#botao-enviar\");\nconst confirmarNovoUsuario = (0, domUtils_1.buscarSeletor)(\"#confirmar-novo-usuario\");\nconst fecharDialog = (0, domUtils_1.buscarSeletor)(\"#fechar-dialog\");\nconfirmarLogin === null || confirmarLogin === void 0 ? void 0 : confirmarLogin.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n    let usuario = usuarioLogin.value;\n    let senha = senhaLogin.value;\n    const users = yield (0, clientHTTP_1.getUser)(usuario, senha);\n    if (users == true) {\n        alert(\"Usuário encontrado!\");\n        usuario = usuarioLogin.value = \"\";\n        senha = senhaLogin.value = \"\";\n        window.location.href = 'https://www.mercadolivre.com.br/';\n        return;\n    }\n    return alert(\"Usuário e/ou senha incorreta!\");\n}));\ncadastrar === null || cadastrar === void 0 ? void 0 : cadastrar.addEventListener(\"click\", () => {\n    dialogCadastrar.style.display = 'flex';\n});\nfecharDialog === null || fecharDialog === void 0 ? void 0 : fecharDialog.addEventListener(\"click\", () => {\n    dialogCadastrar.style.display = 'none';\n});\nconfirmarNovoUsuario === null || confirmarNovoUsuario === void 0 ? void 0 : confirmarNovoUsuario.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n    let novoUsuario = (0, domUtils_1.buscarInput)(\"#novo-usuario\").value;\n    let novaSenha = (0, domUtils_1.buscarInput)(\"#nova-senha\").value;\n    let repeteSenha = (0, domUtils_1.buscarInput)(\"#repete-senha\").value;\n    const verificarRepeteSenha = (0, clientHTTP_1.verificarSeSenhaCorresponde)(repeteSenha, novaSenha);\n    const users = yield (0, clientHTTP_1.getUser)(novoUsuario, novaSenha);\n    console.log(users);\n    if (users == false && verificarRepeteSenha == true) {\n        yield (0, clientHTTP_1.addUser)(novoUsuario, novaSenha);\n        dialogCadastrar.style.display = 'none';\n        alert(\"Usuário cadastrado com sucesso!\");\n        novoUsuario = (0, domUtils_1.buscarInput)(\"#novo-usuario\").value = \"\";\n        novaSenha = (0, domUtils_1.buscarInput)(\"#nova-senha\").value = \"\";\n        repeteSenha = (0, domUtils_1.buscarInput)(\"#repete-senha\").value = \"\";\n        return;\n    }\n    return (0, clientHTTP_1.verificarNovoUsuario)(repeteSenha, novaSenha, novoUsuario);\n}));\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/services/api/clientHTTP.ts":
/*!****************************************!*\
  !*** ./src/services/api/clientHTTP.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.verificarNovoUsuario = exports.verificarSeSenhaCorresponde = exports.addUser = exports.getUser = void 0;\nconst getUser = (nome, senha) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(`http://localhost:5500/users/${senha}/${nome}`);\n        if (!response.ok) {\n            throw new Error(\"Erro na requisição\");\n        }\n        const usuario = yield response.json();\n        return usuario;\n    }\n    catch (erro) { }\n});\nexports.getUser = getUser;\nconst addUser = (nome, senha) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(\"http://localhost:5500/users\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({ nome, senha }),\n        });\n        if (!response.ok) {\n            throw new Error(\"Erro na requisição\");\n        }\n        const newUser = yield response.json();\n    }\n    catch (error) {\n        console.error(\"Erro ao adicionar usuário:\", error);\n    }\n});\nexports.addUser = addUser;\nconst verificarSeSenhaCorresponde = (repeteSenha, senha) => {\n    if (repeteSenha == senha) {\n        return true;\n    }\n    return false;\n};\nexports.verificarSeSenhaCorresponde = verificarSeSenhaCorresponde;\nconst verificarNovoUsuario = (repeteSenha, senha, nome) => __awaiter(void 0, void 0, void 0, function* () {\n    const users = yield getUser(nome, senha);\n    if (users == true) {\n        return alert(\"Usuário indisponível!\");\n    }\n    if (verificarSeSenhaCorresponde(repeteSenha, senha) == false) {\n        return alert(\"As senhas não correspondem!\");\n    }\n});\nexports.verificarNovoUsuario = verificarNovoUsuario;\n\n\n//# sourceURL=webpack:///./src/services/api/clientHTTP.ts?");

/***/ }),

/***/ "./src/services/api/domUtils.ts":
/*!**************************************!*\
  !*** ./src/services/api/domUtils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.buscarModal = exports.buscarSeletor = exports.buscarInput = void 0;\nconst buscarSeletor = (seletor) => {\n    return document.querySelector(seletor);\n};\nexports.buscarSeletor = buscarSeletor;\nconst buscarInput = (seletor) => {\n    return document.querySelector(seletor);\n};\nexports.buscarInput = buscarInput;\nconst buscarModal = (seletor) => {\n    return document.querySelector(seletor);\n};\nexports.buscarModal = buscarModal;\n\n\n//# sourceURL=webpack:///./src/services/api/domUtils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;