// // loggerService.ts

// export class LoggerService {
//     private filePath: string;

//     constructor(filePath: string) {
//         this.filePath = filePath;
//     }

//     logMessage(message: string): void {
//         // Lógica ficticia para escribir en el archivo
//         console.log(`Writing to ${this.filePath}: ${message}`);
//     }
// }

// // app.ts

// import { LoggerService } from './loggerService';

// let logger1 = new LoggerService("log.txt");
// let logger2 = new LoggerService("log.txt");

// logger1.logMessage("This is a message from logger1");
// logger2.logMessage("This is a message from logger2");

export class LoggerService {
    private static instance: LoggerService;
    private filePath: string;

    private constructor(filePath: string) {
        this.filePath = filePath;
    }
    static getInstance(filePath: string): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService(filePath);
        }
        return LoggerService.instance;
    }
    logMessage(message: string): void {
        // Lógica ficticia para escribir en el archivo
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}
//comentado por error
//import { LoggerService } from './loggerService';
let logger1 = LoggerService.getInstance("log.txt");
let logger2 = LoggerService.getInstance("log.txt");
logger1.logMessage("Mensaje para logger1");
logger2.logMessage("Mensaje para logger2");
