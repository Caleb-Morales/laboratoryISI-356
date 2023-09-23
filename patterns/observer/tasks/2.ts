class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

