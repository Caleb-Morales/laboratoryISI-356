
// Definimos una clase para la Computadora
class Computer {
    private RAM: string;
    private CPU: string;
    private HDD: string;
    private graphicsCard: string | undefined;
    private powerSupply: string | undefined;
    private coolingSystem: string | undefined;

    constructor(builder: ComputerBuilder) {
    }

    displayConfiguration(): void {
        console.log(`RAM: ${this.RAM}, CPU: ${this.CPU}, HDD: ${this.HDD}`);
        if (this.graphicsCard) console.log(`Graphics Card: ${this.graphicsCard}`);
        if (this.powerSupply) console.log(`Power Supply: ${this.powerSupply}`);
        if (this.coolingSystem) console.log(`Cooling System: ${this.coolingSystem}`);
    }
}
class ComputerBuilder {
    RAM: string;
    CPU: string;
    HDD: string;
    graphicsCard: string | undefined;
    powerSupply: string | undefined;
    coolingSystem: string | undefined;

    constructor(RAM: string, CPU: string, HDD: string) {
        this.RAM = RAM;
        this.CPU = CPU;
        this.HDD = HDD;
    }
    setGraphicsCard(card: string): ComputerBuilder {
        this.graphicsCard = card;
        return this;
    }
    setPowerSupply(ps: string): ComputerBuilder {
        this.powerSupply = ps;
        return this;
    }
    setCoolingSystem(cooling: string): ComputerBuilder {
        this.coolingSystem = cooling;
        return this;
    }
    build(): Computer {
        return new Computer(this);
    }
}
//uso
const gamingComputer = new ComputerBuilder('32GB', 'Intel i9', '2TB SSD')
    .setGraphicsCard('NVIDIA RTX 3080')
    .setCoolingSystem('Liquid Cooling')
    .build();

gamingComputer.displayConfiguration();

const officeComputer = new ComputerBuilder('8GB', 'Intel i5', '500GB SSD').build();
officeComputer.displayConfiguration();
