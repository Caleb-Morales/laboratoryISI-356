// class User {
//     name: string;
//     age: number;
//     email: string;
//     address: string;

//     constructor(name: string, age: number, email: string, address: string) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.address = address;
//     }

//     saveToDatabase() {
//         console.log(`Saving user ${this.name} to database.`);
//         // Simulando lógica para guardar usuario en la base de datos
//     }

//     sendEmail(message: string) {
//         console.log(`Sending email to ${this.email}: ${message}`);
//         // Simulando lógica para enviar un email
//     }
// }

// const newUser = new User("John Doe", 25, "johndoe@example.com", "123 Main St.");
// newUser.saveToDatabase();
// newUser.sendEmail("Welcome to our platform!");

class User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public address: string
    ) {}
}
class UserRepository {
    save(user: User) {
        console.log(`Saving user ${user.name} to database.`);
    }
}

class EmailService {
    send(email: string, message: string) {
        console.log(`Sending email to ${email}: ${message}`);
    }
}
//uso
const newUser = new User("John Doe", 25, "johndoe@example.com", "123 Main St.");
const userRepository = new UserRepository();
const emailService = new EmailService();
userRepository.save(newUser);
emailService.send(newUser.email, "Welcome to our platform!");
