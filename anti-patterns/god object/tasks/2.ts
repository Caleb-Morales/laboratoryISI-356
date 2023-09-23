// class AirportSystem {
//     flights: any[] = [];
//     passengers: any[] = [];
//     crews: any[] = [];
//     planesMaintenance: any[] = [];
//     financialRecords: any[] = [];

//     // Métodos relacionados con vuelos
//     scheduleFlight(flight: any) {
//         this.flights.push(flight);
//     }

//     // Métodos relacionados con pasajeros
//     checkInPassenger(passenger: any) {
//         this.passengers.push(passenger);
//     }

//     // Métodos relacionados con tripulaciones
//     assignCrewToFlight(crew: any, flightID: string) {
//         this.crews.push({...crew, flightID});
//     }

//     // Métodos relacionados con el mantenimiento de aviones
//     logMaintenance(planeID: string, maintenance: any) {
//         this.planesMaintenance.push({planeID, ...maintenance});
//     }

//     // Métodos relacionados con facturación y contabilidad
//     recordFinancialTransaction(transaction: any) {
//         this.financialRecords.push(transaction);
//     }
// }
class Vuelo {
    constructor(private vuelos: any[] = []) {}
    programarVuelo(vuelo: any) {
        this.vuelos.push(vuelo);
    }
}
class Pasajero {
    constructor(private pasajeros: any[] = []) {}
    hacerCheckInPasajero(pasajero: any) {
        this.pasajeros.push(pasajero);
    }
}
class Tripulacion {
    constructor(private tripulaciones: any[] = []) {}
    asignarTripulacionAVuelo(tripulacion: any, idVuelo: string) {
        this.tripulaciones.push({ ...tripulacion, idVuelo });
    }
}
class MantenimientoAviones {
    constructor(private mantenimientoAviones: any[] = []) {}

    registrarMantenimiento(idAvion: string, mantenimiento: any) {
        this.mantenimientoAviones.push({ idAvion, ...mantenimiento });
    }
}
class RegistrosFinancieros {
    constructor(private registrosFinancieros: any[] = []) {}

    registrarTransaccionFinanciera(transaccion: any) {
        this.registrosFinancieros.push(transaccion);
    }
}
class SistemaAeropuerto {
    vuelos: Vuelo;
    pasajeros: Pasajero;
    tripulaciones: Tripulacion;
    mantenimientoAviones: MantenimientoAviones;
    registrosFinancieros: RegistrosFinancieros;
    constructor() {
        this.vuelos = new Vuelo();
        this.pasajeros = new Pasajero();
        this.tripulaciones = new Tripulacion();
        this.mantenimientoAviones = new MantenimientoAviones();
        this.registrosFinancieros = new RegistrosFinancieros();
    }
}

