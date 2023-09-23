// class Product {
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// class Cart {
//     products: Product[] = [];

//     addProduct(product: Product) {
//         this.products.push(product);
//     }

//     calculateTotal(): number {
//         let total = this.products.reduce((acc, product) => acc + product.price, 0);

//         // Descuento: 10% si hay más de 5 productos
//         if (this.products.length > 5) {
//             total *= 0.9;
//         }

//         // Envío: $10 si la compra es menor a $50
//         if (total < 50) {
//             total += 10;
//         }

//         return total;
//     }
// }

class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}
class Cart {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }
    calculateTotal(): number {
        const subtotal = this.products.reduce((acc, product) => acc + product.price, 0);
        const discount = this.calculateDiscount(subtotal);
        const shippingCost = this.calculateShipping(subtotal);
        return subtotal - discount + shippingCost;
    }
    private calculateDiscount(subtotal: number): number {
        if (this.products.length > 5) {
            return subtotal * 0.1;
        }
        return 0;
    }
    private calculateShipping(subtotal: number): number {
        if (subtotal < 50) {
            return 10;
        }
        return 0;
    }
}
//uso
const myCart = new Cart();
myCart.addProduct(new Product(1, "Producto 1", 25));
myCart.addProduct(new Product(2, "Producto 2", 30));
myCart.addProduct(new Product(3, "Producto 3", 15));
console.log("Total: $" + myCart.calculateTotal());
