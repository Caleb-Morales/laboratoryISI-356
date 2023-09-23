// class Room {
//     paint: string;
//     design: string;

//     constructor(paint: string) {
//         this.paint = paint;
//         this.design = '';
//     }

//     applyDesign(design: string) {
//         this.design += design;
//     }

//     showRoom() {
//         console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
//     }
// }

// const myRoom = new Room('blue');
// myRoom.applyDesign('stripe');
// myRoom.showRoom();

class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    addDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}
class DesignDecorator {
    room: Room;

    constructor(room: Room) {
        this.room = room;
    }

    addDesign(design: string) {
        this.room.addDesign(design);
    }

    showRoom() {
        this.room.showRoom();
    }
}

// Ejemplo de uso
const myRoom = new Room('blue');
const roomWithStripeDesign = new DesignDecorator(myRoom);