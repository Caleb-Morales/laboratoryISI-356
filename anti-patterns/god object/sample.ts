// class PetStore {
//     // Atributos relacionados con el inventario
//     inventory: any[] = [];

//     // Atributos relacionados con los empleados
//     employees: string[] = [];
//     salaries: { [key: string]: number } = {};

//     // Atributos relacionados con las ventas
//     salesRecords: any[] = [];

//     // Métodos relacionados con el inventario
//     addProduct(product: any) {
//         this.inventory.push(product);
//     }
//     removeProduct(product: any) {
//         const index = this.inventory.indexOf(product);
//         if (index > -1) {
//             this.inventory.splice(index, 1);
//         }
//     }

//     // Métodos relacionados con los empleados
//     hireEmployee(employee: string, salary: number) {
//         this.employees.push(employee);
//         this.salaries[employee] = salary;
//     }
//     fireEmployee(employee: string) {
//         const index = this.employees.indexOf(employee);
//         if (index > -1) {
//             this.employees.splice(index, 1);
//         }
//         delete this.salaries[employee];
//     }

//     // Métodos relacionados con las ventas
//     recordSale(sale: any) {
//         this.salesRecords.push(sale);
//     }
//     getDailySales(date: string): any[] {
//         return this.salesRecords.filter(sale => sale.date === date);
//     }
// }

// const store = new PetStore();
// store.addProduct({ name: "Dog Food", price: 20 });
// store.hireEmployee("Alice", 5000);
// store.recordSale({ date: "2023-09-15", total: 50 });

class Inventory {
    private inventory: any[] = [];
    addProduct(product: any) {
        this.inventory.push(product);
    }
    removeProduct(product: any) {
        const index = this.inventory.indexOf(product);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }
    getInventory() {
        return this.inventory;
    }
}
class EmployeeManagement {
    private employees: string[] = [];
    private salaries: { [key: string]: number } = {};

    hireEmployee(employee: string, salary: number) {
        this.employees.push(employee);
        this.salaries[employee] = salary;
    }
    fireEmployee(employee: string) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
            delete this.salaries[employee];
        }
    }
    getEmployees() {
        return this.employees;
    }
    getEmployeeSalary(employee: string) {
        return this.salaries[employee];
    }
}
class Sales {
    private salesRecords: any[] = [];

    recordSale(sale: any) {
        this.salesRecords.push(sale);
    }
    getDailySales(date: string): any[] {
        return this.salesRecords.filter(sale => sale.date === date);
    }
}
class PetStore {
    inventory: Inventory;
    employeeManagement: EmployeeManagement;
    sales: Sales;

    constructor() {
        this.inventory = new Inventory();
        this.employeeManagement = new EmployeeManagement();
        this.sales = new Sales();
    }
}
const store = new PetStore();
store.inventory.addProduct({ name: "Dog Food", price: 20 });
store.employeeManagement.hireEmployee("Alice", 5000);
store.sales.recordSale({ date: "2023-09-15", total: 50 });
console.log("Inventario:", store.inventory.getInventory());
console.log("Empleados:", store.employeeManagement.getEmployees());
console.log("Salario de Alice:", store.employeeManagement.getEmployeeSalary("Alice"));
console.log("Ventas del 2023-09-15:", store.sales.getDailySales("2023-09-15"));
