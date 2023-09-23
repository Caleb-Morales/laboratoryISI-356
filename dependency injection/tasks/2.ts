// class BikeDelivery {
//     deliverPackage(packageId: string, address: string) {
//         console.log(`Delivering package ${packageId} to ${address} using a bike.`);
//     }
// }

// class PackageService {
//     deliveryMethod: BikeDelivery;

//     constructor() {
//         this.deliveryMethod = new BikeDelivery();
//     }

//     sendPackage(packageId: string, address: string) {
//         this.deliveryMethod.deliverPackage(packageId, address);
//     }
// }


interface IDeliveryMethod {
    deliverPackage(packageId: string, address: string): void;
}
class BikeDelivery implements IDeliveryMethod {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}
class PackageService {
    deliveryMethod: IDeliveryMethod;
    constructor(deliveryMethod: IDeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }
    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}
const bikeDelivery = new BikeDelivery();
const packageService = new PackageService(bikeDelivery);
packageService.sendPackage("123", "123 Main St.");
