import { HttpStatus } from '@nestjs/common';
declare class ErrorHandler {
    message: string;
    status: number;
    content: any;
    constructor(message: any, status?: HttpStatus, content?: {});
}
export default ErrorHandler;
