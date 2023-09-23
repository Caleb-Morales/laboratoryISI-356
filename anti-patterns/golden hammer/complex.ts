class MongoDB {
    constructor(private dbName: string) {}

    insert(collectionName: string, document: any) {
        console.log(`Inserting document into collection ${collectionName} in MongoDB (${this.dbName}):`, document);
        // Lógica real para insertar en la base de datos
    }

    find(collectionName: string, query: any) {
        console.log(`Finding document in collection ${collectionName} in MongoDB (${this.dbName}) with query:`, query);
        // Lógica real para buscar en la base de datos
        return [{ ...query }]; // Simulación de datos encontrados
    }

    // ... otros métodos relacionados con MongoDB
}

// Aplicación de Redes Sociales
class SocialMediaApp {
    constructor(private db: MongoDB) {}

    postContent(content: any) {
        this.db.insert("socialMediaPosts", content);
    }

    searchContent(query: any) {
        return this.db.find("socialMediaPosts", query);
    }
}

// Sistema Financiero
class FinancialSystem {
    constructor(private db: MongoDB) {}

    recordTransaction(transaction: any) {
        this.db.insert("financialTransactions", transaction);
        if (transaction.type === "transfer") {
            this.handleTransferTransaction(transaction);
        }
    }

    handleTransferTransaction(transaction: any) {
        // Lógica específica para manejar transacciones de transferencia
        // Puedes realizar búsquedas y actualizaciones en la base de datos de manera adecuada
    }
}

// Uso:

const db = new MongoDB("myDatabase");

const socialApp = new SocialMediaApp(db);
socialApp.postContent({ user: "John", content: "Hello world!" });
