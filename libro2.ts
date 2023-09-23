class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroDeTexto extends Libro3 {
    mostrarDescripcion() {
        return `Libro de texto ${super.mostrarDescripcion()}`;
    }
}

class Novela extends Libro3 {
    genero: string;

    constructor(titulo: string, autor: string, contenido: string, genero: string) {
        super(titulo, autor, contenido);
        this.genero = genero;
    }

    mostrarDescripcion() {
        return `Novela ${super.mostrarDescripcion()} del género ${this.genero}`;
    }
}

const libroTexto = new LibroDeTexto('Matemáticas Avanzadas', 'Profesor Smith', 'Contenido...');
const novela = new Novela('El Misterio en la Montaña', 'Alicia Johnson', 'Había una vez...', 'Misterio');

console.log(libroTexto.mostrarDescripcion());
console.log(novela.mostrarDescripcion());