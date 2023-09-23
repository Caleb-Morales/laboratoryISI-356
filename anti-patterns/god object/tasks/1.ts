// class Cinema {
//     movies: any[] = [];
//     snacks: any[] = [];
//     tickets: any[] = [];
//     employees: any[] = [];

//     // Métodos relacionados con películas
//     addMovie(movie: any) {
//         this.movies.push(movie);
//     }

//     // Métodos relacionados con snacks
//     buySnack(snack: any) {
//         this.snacks.push(snack);
//     }

//     // Métodos relacionados con entradas
//     buyTicket(ticket: any) {
//         this.tickets.push(ticket);
//     }

//     // Métodos relacionados con empleados
//     hireEmployee(employee: any) {
//         this.employees.push(employee);
//     }
// }
class Movie {
    constructor(private movies: any[] = []) {}
    addMovie(movie: any) {
        this.movies.push(movie);
    }
}
class Snack {
    constructor(private snacks: any[] = []) {}
    buySnack(snack: any) {
        this.snacks.push(snack);
    }
}
class Ticket {
    constructor(private tickets: any[] = []) {}
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }
}
class Employee {
    constructor(private employees: any[] = []) {}
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}
class Cinema {
    movies: Movie;
    snacks: Snack;
    tickets: Ticket;
    employees: Employee;
    constructor() {
        this.movies = new Movie();
        this.snacks = new Snack();
        this.tickets = new Ticket();
        this.employees = new Employee();
    }
}
