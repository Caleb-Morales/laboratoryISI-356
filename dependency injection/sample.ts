// Definimos una interfaz para los servicios de mensajería
interface IMessagingService {
    sendMessage(message: string, receiver: string): void;
}
class EmailService implements IMessagingService {
    sendMessage(message: string, receiver: string) {
        console.log(`Sending email to ${receiver}: ${message}`);
    }
}
class SMSService implements IMessagingService {
    sendMessage(message: string, receiver: string) {
        console.log(`Sending SMS to ${receiver}: ${message}`);
    }
}
class MessageService {
    messagingService: IMessagingService;
    constructor(messagingService: IMessagingService) {
        this.messagingService = messagingService;
    }
    sendMessage(message: string, receiver: string) {
        this.messagingService.sendMessage(message, receiver);
    }
}
// Crear instancias de servicios de mensajería en el punto de entrada
const emailService = new EmailService();
const smsService = new SMSService();
// Crear instancias de MessageService con los servicios de mensajería correspondientes
const messageService1 = new MessageService(emailService);
messageService1.sendMessage("Hello via Email!", "john@example.com");
const messageService2 = new MessageService(smsService);
messageService2.sendMessage("Hello via SMS!", "123-456-7890");
