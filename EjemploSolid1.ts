// interface CalculadoraMulta {
//     calcularMulta(fechaDevolucion: Date, fechaDevolucionReal: Date): number;
// }

// class CalculadoraMultaDiaria implements CalculadoraMulta {
//     calcularMulta(fechaDevolucion: Date, fechaDevolucionReal: Date): number {
//         const diferenciaTiempo = fechaDevolucionReal.getTime() - fechaDevolucion.getTime();
//         if (diferenciaTiempo > 0) {
//             const diasDeRetraso = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
//             return diasDeRetraso;
//         }
//         return 0;
//     }
// }

// class Libro {
//     private fechaPrestamo: Date | null = null;
//     private calculadoraMulta: CalculadoraMulta = new CalculadoraMultaDiaria();

//     prestar(): void {
//         this.fechaPrestamo = new Date();
//     }

//     devolverLibro(): { diasDeRetraso: number; multa: number } {
//         if (!this.fechaPrestamo) {
//             throw new Error("El libro no se ha prestado previamente.");
//         }

//         const fechaDevolucionReal = new Date();
//         const fechaDevolucion = new Date(this.fechaPrestamo);
//         fechaDevolucion.setDate(fechaDevolucion.getDate() + 7);

//         const diasDeRetraso = this.calcularDiasDeRetraso(fechaDevolucion, fechaDevolucionReal);
//         const multa = this.calculadoraMulta.calcularMulta(fechaDevolucion, fechaDevolucionReal);

//         return { diasDeRetraso, multa };
//     }

//     private calcularDiasDeRetraso(fechaDevolucion: Date, fechaDevolucionReal: Date): number {
//         const diferenciaTiempo = fechaDevolucionReal.getTime() - fechaDevolucion.getTime();
//         if (diferenciaTiempo > 0) {
//             return Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
//         }
//         return 0;
//     }
// }


// --------------------------------------------------------------------------------------------------------------------------

interface CalculadoraMulta {
    calcularMulta(fechaDevolucion: Date, fechaDevolucionReal: Date): number;
}

class CalculadoraMultaDiaria implements CalculadoraMulta {
    calcularMulta(fechaDevolucion: Date, fechaDevolucionReal: Date): number {
        const diferenciaTiempo = fechaDevolucionReal.getTime() - fechaDevolucion.getTime();
        if (diferenciaTiempo > 0) {
            const diasDeRetraso = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
            return diasDeRetraso; 
        }
        return 0;
    }
}

enum TipoMembresia {
    Basico = "Básico",
    Premium = "Premium",
    Platino = "Platino",
}

enum CategoriaLibro {
    Ficcion = "Ficción",
    NoFiccion = "No Ficción",
    Referencia = "Referencia",
}

class Usuario {
    constructor(
        private nombre: string,
        private membresia: TipoMembresia,
        private librosPrestados: Libro[] = [],
        private historialPrestamos: Prestamo[] = []
    ) {}

    puedePrestarLibro(): boolean {
        if (this.membresia === TipoMembresia.Basico && this.librosPrestados.length >= 2) {
            return false;
        } else if (this.membresia === TipoMembresia.Premium && this.librosPrestados.length >= 5) {
            return false;
        }
        return true;
    }

    prestarLibro(libro: Libro): boolean {
        if (!this.puedePrestarLibro() || libro.categoria === CategoriaLibro.Referencia) {
            return false;
        }
        this.librosPrestados.push(libro);
        this.historialPrestamos.push(new Prestamo(libro, new Date()));
        return true;
    }

    devolverLibro(libro: Libro): { diasDeRetraso: number; multa: number } | null {
        const index = this.librosPrestados.indexOf(libro);
        if (index === -1) {
            return null;
        }

        const fechaDevolucionReal = new Date();
        const prestamo = this.historialPrestamos.find((p) => p.libro === libro);

        if (!prestamo) {
            return null;
        }

        const { diasDeRetraso, multa } = prestamo.calcularMulta(fechaDevolucionReal);
        this.librosPrestados.splice(index, 1);
        return { diasDeRetraso, multa };
    }
}

class Libro {
    constructor(
        private titulo: string,
        private autor: string,
        public categoria: CategoriaLibro,
    ) {}

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    getCategoria(): CategoriaLibro {
        return this.categoria;
    }
}

class Prestamo {
    constructor(public libro: Libro, public fechaPrestamo: Date) {}

    calcularMulta(fechaDevolucionReal: Date): { diasDeRetraso: number; multa: number } {
        const dueDate = new Date(this.fechaPrestamo);
        dueDate.setDate(dueDate.getDate() + 7);
        const calculadoraMulta = new CalculadoraMultaDiaria();
        const diasDeRetraso = calculadoraMulta.calcularMulta(dueDate, fechaDevolucionReal);
        const multa = diasDeRetraso * 1;
        return { diasDeRetraso, multa };
    }
}
