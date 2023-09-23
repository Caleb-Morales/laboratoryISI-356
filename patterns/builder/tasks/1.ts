// class Pizza {
//     size: string;
//     cheese: boolean;
//     pepperoni: boolean;
//     mushrooms: boolean;
//     bacon: boolean;

//     constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
//         this.size = size;
//         this.cheese = cheese;
//         this.pepperoni = pepperoni;
//         this.mushrooms = mushrooms;
//         this.bacon = bacon;
//     }
// }

// const myPizza = new Pizza('large', true, true, false, true);
class Pizza {
    size: string;
    toppings: {
        cheese: boolean;
        pepperoni: boolean;
        mushrooms: boolean;
        bacon: boolean;
    };
    constructor(size: string, toppings: { cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean }) {
        this.size = size;
        this.toppings = toppings;
    }
}
const myPizzaToppings = {
    cheese: true,
    pepperoni: true,
    mushrooms: false,
    bacon: true
};
const myPizza = new Pizza('large', myPizzaToppings);

