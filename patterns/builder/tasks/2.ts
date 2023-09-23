class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;
    constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
        this.fuel = fuel;
    }
}
const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');
