// object containing the arays of the components of the messages
// and methods for randomizing the output
const Blessings = {
    offer: ['Sweet Roll', 'Gold Coin'],
    divine: ['Talos', 'Mara'],
    blessing: ['Money', 'Hope', 'Love'],

    getOffer() {
        let i = Math.floor(Math.random() * this.offer.length);
        return this.offer[i];
    },

    getDivine() {
        let i = Math.floor(Math.random() * this.divine.length);
        return this.divine[i];
    },

    getBlessing() {
        let i = Math.floor(Math.random() * this.blessing.length);
        return this.blessing[i];
    }
}

console.log(`You offered a ${Blessings.getOffer()} at the altar. ${Blessings.getDivine()} blesses you with ${Blessings.getBlessing()}!`);