

const cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
const color = ['spead','heart']

const alreadyPickedCards = []
const withDrawCard = () => {
    const randomColorPickIndex = Math.round(Math.random() * 10)
    const pickedNameIndex = Math.round(Math.random() * 10)
    const pickedCardNumber = Math.round(Math.random() * 100)
    if ( randomColorPickIndex > 1 || pickedNameIndex > 1 || pickedCardNumber > 13){
        withDrawCard()
    }

    const pickedShade = color[randomColorPickIndex].property[pickedNameIndex]

    const pickedCard = {
        shade: pickedShade,
        card: cards[pickedCardNumber]
    }

    if (alreadyPickedCards.find(c => {
        return c.shade === pickedCard.shade && c.card === pickedCard.card
    })){
        console.log('this card has already withdraw')
        withDrawCard()
    }

    alreadyPickedCards.push()

    return pickedCard

}
withDrawCard()