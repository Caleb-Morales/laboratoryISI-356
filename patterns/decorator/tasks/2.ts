// class Computer {
//     components: string[] = [];

//     addComponent(component: string) {
//         this.components.push(component);
//     }

//     showConfiguration() {
//         console.log(`This computer has: ${this.components.join(', ')}`);
//     }
// }

// const myComputer = new Computer();
// myComputer.addComponent('16GB RAM');
// myComputer.addComponent('1TB SSD');
// myComputer.addComponent('Intel i7 Processor');
// myComputer.showConfiguration();

class Computer1 {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}
// Decorador de componentes
class ComponentDecorator {
    computer: Computer1;

    constructor(computer: Computer1) {
        this.computer = computer;
    }

    addComponent(component: string) {
        this.computer.addComponent(component);
    }

    showConfiguration() {
        this.computer.showConfiguration();
    }
}
// Ejemplo de uso
const myComputer = new Computer1();
const computerWithUpgradedRAM = new ComponentDecorator(myComputer);
computerWithUpgradedRAM.addComponent('16GB RAM');
computerWithUpgradedRAM.showConfiguration();