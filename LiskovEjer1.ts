// class pajaro {
//     volar(){
//         console.log("El pajaro vuela en el cielo");

//     }
// }
// class pinguino extends pajaro{
//     volar(){
//         throw new Error("Los pinguinos no pueden volar");        
//     }
// }
class Pajaro {
    volar() {
        console.log("El pájaro vuela en el cielo");
    }
    
    noPuedeVolar() {
        console.log("Este pájaro no puede volar");
    }
}

class Pinguino extends Pajaro {
    volar() {
        this.noPuedeVolar(); // Llama al método de la clase base
    }
}
