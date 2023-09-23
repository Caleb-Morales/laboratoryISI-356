// // contenido de configLoader.ts

// export function loadConfigurations() {
//     // Aquí iría la lógica para cargar las configuraciones...
//     // Podría ser desde un archivo local, una API, una base de datos, etc.
//     return {
//         databaseConnection: "mongodb://localhost:27017/mydb",
//         // ... otras configuraciones ...
//     };
// }

let configurations: { [key: string]: any } | null = null;
export async function loadConfigurations() {
    if (configurations === null) {
        configurations = await loadFromSource();
    }
    return configurations;
}
async function loadFromSource(): Promise<{ [key: string]: any }> {
    return {
        databaseConnection: "mongodb://localhost:27017/mydb",
    };
}

