// Componente base
interface Notifier {
    send(message: string): void;
}
class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}
abstract class NotifierDecorator implements Notifier {
    constructor(protected notifier: Notifier) {}

    abstract send(message: string): void;
}
class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        this.notifier.send(message);
        console.log(`Sending SMS with message: ${message}`);
    }
}
class SlackNotifier extends NotifierDecorator {
    send(message: string): void {
        this.notifier.send(message);
        console.log(`Sending Slack notification with message: ${message}`);
    }
}
// Uso
let notifier: Notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);

notifier.send('Hello World!');
