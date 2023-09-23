// interface DispositivosMultimedia {
//     reproducirMusica(): void;
//     reproducirVideo(): void;
//     leerEbook(): void;
// }
// class Smartphone implements DispositivosMultimedia{
//     reproducirMusica(){
//         console.log("Reproduciendo musica en el smartphone");
//     }
//     reproducirVideos(){
//         console.log("Reproduciendo video en el smartphone");
//     }
//     leerEbook(){
//         console.log("Leyendo eBook en el smartphone")
//     }
// }
// class ReproducirMP3 implements DispositivosMultimedia{
//     reproducirMusica(){
//         console.log("Reproduciendo musica en el MP3");
//     }
//     reproducirVideo(){
//         console.log("Esta funcionalidad no esta soportada");
//     }
//     leerEbook(){
//         console.log("Esta funcionalidad no esta soportada");
//     }
// }

interface ReproducirMusica {
    reproducirMusica(): void;
}

interface ReproducirVideo {
    reproducirVideo(): void;
}

interface LeerEbook {
    leerEbook(): void;
}

class Smartphone implements ReproducirMusica, ReproducirVideo, LeerEbook {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }
    
    reproducirVideo() {
        console.log("Reproduciendo video en el smartphone");
    }

    leerEbook() {
        console.log("Leyendo eBook en el smartphone");
    }
}

class ReproducirMP3 implements ReproducirMusica {
    reproducirMusica() {
        console.log("Reproduciendo música en el MP3");
    }
}
