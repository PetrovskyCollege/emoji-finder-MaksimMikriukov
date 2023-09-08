import { data } from './data/emoji.js'

const emoContainer = document.getElementById("emoGrid");

data.forEach(emo => {
    let emoBox = document.createElement('div')
    emoBox.className = "item";

    let emoSymbol = document.createElement('h1')
    emoSymbol.append(emo.symbol)

    let emoTitle = document.createElement('h2')
    emoTitle.append(emo.title)

    let emoKeys = document.createElement('p')
    emoKeys.append(emo.keywords)

    emoBox.append(emoSymbol)
    emoBox.append(emoTitle)
    emoBox.append(emoKeys)

    emoContainer.append(emoBox)
});