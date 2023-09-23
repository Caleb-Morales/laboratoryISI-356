// interface Animal{
//     caminar(): void;
//     nadar(): void;
//     volar(): void;
//     HacerSonido(): void;
// }
// class Aguila implements Animal{
//     caminar(){
//         console.log("El Aguila camina lentamente");

//     }
//     nadar(){
//         throw new Error("El Aguila camina lentamente");

//     }
//     volar(){
//         console.log("El Aguila vuela alto en el cielo");

//     }
//     HacerSonidor(){
//         console.log("El Aguila emite un sonido agudo");
//     }
// }
// class Tiburon implements Animal{
//     caminar(){
//         throw new Error("El Tiburon no puede caminar");

//     }
//     nadar(){
//         console.log("El Tiburon nada sumamente rapido");

//     }
//     volar(){
//         throw new Error("El Tiburon no puede volar");

//     }
//     HacerSonidor(){
//         console.log("El Tiburon no emite sonidos audibles fuera del agua");
//     }
// }
interface CaminarA {
    caminar();
}

interface NadarA {
    nadar();
}

interface VolarA {
    volar();
}

interface SonidoA {
    HacerSonido();
}

class Aguila implements VolarA, SonidoA {
    volar() {
        console.log("El Águila vuela alto en el cielo");
    }

    HacerSonido() {
        console.log("El Águila emite un sonido agudo");
    }
}

class Tiburon implements NadarA, SonidoA {
    nadar() {
        console.log("El Tiburón nada sumamente rápido");
    }

    HacerSonido() {
        console.log("El Tiburón no emite sonidos audibles fuera del agua");
    }
}