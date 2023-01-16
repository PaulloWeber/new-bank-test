"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountNumber = exports.Messages = void 0;
var Messages;
(function (Messages) {
    Messages["SUCESS_RECHARGE"] = "Recarga efetuada com sucesso.";
    Messages["ERROR_RECHARGE"] = "Erro ao efetuar recarga.";
    Messages["SUCESS_DISCHARGE"] = "Retirada efetuada com sucesso.";
    Messages["ERROR_DISCHARGE"] = "Erro ao retirar recarga.";
    Messages["SUCESS_CREATE_ACCOUNT"] = "Conta criada com sucesso.";
    Messages["ERROR_CREATE_ACCOUNT"] = "Erro ao criar a conta.";
    Messages["SUCESS_CREATE_USER"] = "Usuario criado com sucesso.";
    Messages["ERROR_CREATE_USER"] = "Erro ao criar usuario.";
    Messages["SUCESS_FIND_USER"] = "Usuario buscado com sucesso.";
    Messages["ERROR_FIND_USER"] = "Erro ao buscar o usuario.";
    Messages["SUCESS_FIND_ACCOUNT"] = "Contas buscadas com sucesso.";
    Messages["ERROR_FIND_ACCOUNT"] = "Erro ao buscar as contas.";
})(Messages = exports.Messages || (exports.Messages = {}));
function generateAccountNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateAccountNumber = generateAccountNumber;
//# sourceMappingURL=utils.js.map