type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product[];
};
let orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
];
