// class luz {
//     encender(){
//         console.log("Luz encendida");
//     }
//     apagar(){
//         console.log("Luz Apagada");
//     }
// }
// class Interruptor{
//     private luz: luz;

//     constructor(luz: luz){
//         this.luz = luz;
//     }

//     operar(){
//         this.luz.encender();
//         //this.luz.apagar();
//     }
// }
interface FuncionesdeLuz {
    encender(): void;
    apagar(): void;
}

class Luz implements FuncionesdeLuz {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

class Interruptor {
    private dispositivo: FuncionesdeLuz;

    constructor(dispositivo: FuncionesdeLuz) {
        this.dispositivo = dispositivo;
    }

    operar() {
        if (this.dispositivo) {
            this.dispositivo.encender();
        }
    }
}