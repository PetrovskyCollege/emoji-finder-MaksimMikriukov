import { data } from './data/emoji.js'

const emoContainer = document.getElementById("emoGrid");

function showEmoList(keyword) {

    emoContainer.innerHTML = ''

    data.forEach(emo => {

        if((emo.keywords.includes(keyword)) || (emo.title.includes(keyword))){

            let emoBox = document.createElement('div')
            emoBox.className = "item";
        
            let emoSymbol = document.createElement('h1')
            emoSymbol.append(emo.symbol)
        
            let emoTitle = document.createElement('h2')
            emoTitle.append(emo.title)
        
            let emoKeys = document.createElement('p')
            
        
            
            let cleanKeywords = ""
            let actualWord = ""
            let lastIndex = 0
            for( let i=0; i<emo.keywords.length; i++){
                if((emo.keywords[i] == " ") || (i == emo.keywords.length -1)){
                    if(i == emo.keywords.length - 1) {
                        actualWord = emo.keywords.slice(lastIndex, i+1)
                    } else actualWord = emo.keywords.slice(lastIndex, i)

                    if (!(cleanKeywords.includes(actualWord))) {
                        cleanKeywords += actualWord + " "
                    }
                    lastIndex = i + 1
                }
            }
            
            emoKeys.append(cleanKeywords)
            
            emoBox.append(emoSymbol)
            emoBox.append(emoTitle)
            emoBox.append(emoKeys)
        
            emoContainer.append(emoBox)
        };
    });
}

showEmoList('')


let findInput = document.getElementById("inputID")
findInput.onchange = function() {
 let keywords = document.getElementById("inputID").value
 showEmoList(keywords)
};