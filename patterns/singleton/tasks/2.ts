// // dbService.ts

// export class DatabaseService {
//     private connectionString: string;

//     constructor(connectionString: string) {
//         this.connectionString = connectionString;
//     }

//     connect(): void {
//         // Lógica para conectar a la base de datos
//         console.log(`Connecting to database with ${this.connectionString}`);
//     }
// }

// // app.ts

// import { DatabaseService } from './dbService';

// let dbService1 = new DatabaseService("mongodb://localhost/db1");
// let dbService2 = new DatabaseService("mongodb://localhost/db1"); // Nota que es la misma dirección que dbService1

// dbService1.connect();
// dbService2.connect();

export class DatabaseService1 {
    private static instance: DatabaseService1;
    private connectionString: string;
    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }
    static getInstance(connectionString: string): DatabaseService1 {
        if (!DatabaseService1.instance) {
            DatabaseService1.instance = new DatabaseService1(connectionString);
        }
        return DatabaseService1.instance;
    }
    connect(): void {
        // Lógica para conectar a la base de datos
        console.log(`Connecting to database with ${this.connectionString}`);
    }
}
//COmentado por el error del import
//import { DatabaseService } from './dbService';

//let dbService1 = DatabaseService.getInstance("mongodb://localhost/db1");
//let dbService2 = DatabaseService.getInstance("mongodb://localhost/db1"); // Misma dirección que dbService1

//dbService1.connect();
//dbService2.connect();
