declare class DataHandler {
    message: string;
    status: number;
    content: any;
    constructor(status: any, message: any, content?: {});
}
export default DataHandler;
