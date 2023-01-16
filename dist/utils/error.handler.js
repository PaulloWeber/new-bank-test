"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ErrorHandler {
    constructor(message, status = common_1.HttpStatus.INTERNAL_SERVER_ERROR, content = {}) {
        this.message = message;
        this.status = status;
        this.content = content;
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=error.handler.js.map