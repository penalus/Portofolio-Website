// Clickable dropdown function in navigation menu
function dropDown() {
    document.getElementById("dropDownContent").classList.toggle("show");
}    

window.onclick = function(a) {
    if(!a.target.matches('.dropbtn')) {
        var dropDown = document.getElementById("dropDown");
        if(dropDown.classList.contains('show')) {
            dropDown.classList.remove("show");
        }
    }
}

// Message Generator 
const messagesObject = {
    first: ["You", "Someone you know", "Your mother", "Your worst enemy"],
    second: ["will", "will never", "will maybe", "will do everything they can to", "will kill to", "are secretly wishing to"],
    third: ["be young", "be old", "be rich", "become president", "be poor", "have good fortune", "die very soon", "look young forever", "frame someone close to you for murder"]
}


function messageGenerator() {
    let randomSentence = [];

    const firstPiece = messagesObject.first;
    const secondPiece = messagesObject.second;
    const thirdPiece = messagesObject.third;

    const firstRandomNumber = Math.floor(Math.random() * firstPiece.length);
    const secondRandomNumber = Math.floor(Math.random() * secondPiece.length);
    const thirdRandomNumber = Math.floor(Math.random() * thirdPiece.length);

    randomSentence.push(firstPiece[firstRandomNumber]);
    randomSentence.push(secondPiece[secondRandomNumber]);
    randomSentence.push(thirdPiece[thirdRandomNumber]);

    
    document.getElementById("mg-message").innerHTML = randomSentence.join(' ');
}

messageGenerator();

    