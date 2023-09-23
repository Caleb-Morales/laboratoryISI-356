// class BaseDeDatos{
//     guardar(configuracion: Configuracion){
//         console.log("Guardando configuracion con valor : ${configuarcion.valor} en la base de datos");
//     }
//     obtener(): Configuracion {
//         return new Configuarcion("valor");
//     }
// }

// class GestorCOnfiguraciones{
//     db: BaseDeDatos;

//     constructor(){
//         this.db = new BaseDeDatos();
//     }

//     guardarConfiguarcion(valor: string){
//         const configuarcion = new Configuracion(valor);
//         this.db.guardar(configuarcion);

//         obtenerConfiguarcion(): configuarcion{
//             return this.db.obtener();
//         }
//     }
// }
class Configuracion {
    constructor(public valor: string) {}
}

class BaseDeDatos {
    guardar(configuracion: Configuracion): void {
        console.log(`Guardando configuracion con valor: ${configuracion.valor} en la base de datos`);
    }

    obtener(): Configuracion {
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones {
    db: BaseDeDatos;

    constructor() {
        this.db = new BaseDeDatos();
    }

    guardarConfiguracion(valor: string): void {
        const configuracion = new Configuracion(valor);
        this.db.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.db.obtener();
    }
}