// class TodoManager {
//     private todos: string[] = [];

//     add(todo: string) {
//         this.todos.push(todo);
//         this.save();
//         this.render();
//     }

//     remove(index: number) {
//         this.todos.splice(index, 1);
//         this.save();
//         this.render();
//     }

//     private save() {
//         console.log("Saving todos to local storage...");
//         // Código para guardar todos en el almacenamiento local
//     }

//     private render() {
//         console.log("Rendering todos in the UI...");
//         // Código para renderizar todos en la UI
//     }
// }

class TodoStorage {
    static saveTodos(todos: string[]) {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    static loadTodos(): string[] {
        console.log("Loading todos from local storage...");
        // Código para cargar todos desde el almacenamiento local
        return [];
    }
}

class TodoUI {
    static renderTodos(todos: string[]) {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}

class TodoManager {
    private todos: string[] = [];

    constructor() {
        this.todos = TodoStorage.loadTodos();
        TodoUI.renderTodos(this.todos);
    }

    add(todo: string) {
        this.todos.push(todo);
        this.saveAndRender();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.saveAndRender();
    }

    private saveAndRender() {
        TodoStorage.saveTodos(this.todos);
        TodoUI.renderTodos(this.todos);
    }
}

const todoManager = new TodoManager();

// Para agregar una tarea:
todoManager.add("Hacer la compra");