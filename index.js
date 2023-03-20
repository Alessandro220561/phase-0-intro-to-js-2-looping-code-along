const receivers = ["Guadalupe", "Ollie", "Aki"]
function writeCards(receivers, event) {
    let cards = [];
    for(let i = 0; i < receivers.length; i++){
       cards.push(`Thank you, ${receivers[i]}, for the wonderful ${event} gift!`);
        }
    return cards;
}
function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)
    }
}