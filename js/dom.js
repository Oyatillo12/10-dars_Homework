let speech = new webkitSpeechRecognition()
let audio = new Audio
// let elTitle = document.querySelector(".title")
let elBody = document.querySelector("body")
let eltitle = document.querySelector(".title")
let eltitle1 = document.querySelector(".h1title")
speech.lang = "En-en"

speech.onresult = function(e){
    let result = e.results[0][0].transcript
    console.log(result);
    // elTitle.textContent = result
    if(result == "black" || result == "Black"){
        elBody.classList.add('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('orange')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "green" || result == "Green"){
        elBody.classList.add('green')
        elBody.classList.remove('black')
        elBody.classList.remove('yellow')
        elBody.classList.remove('orange')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "yellow" || result == "Yellow"){
        elBody.classList.add('yellow')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('orange')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "orange" || result == "Orange"){
        elBody.classList.add('orange')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('red')
        elBody.classList.remove('purple')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "blue"  || result == "Blue"){
        elBody.classList.add('blue')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('orange')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
    }
    else if(result == "grey" || result == "Grey"){
        elBody.classList.add('grey')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('orange')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "pink" || result == "Pink"){
        elBody.classList.add('pink')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('orange')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('red')
        elBody.classList.remove('purple')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "olive" || result == "Olive"){
        elBody.classList.add('olive')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('orange')
        elBody.classList.remove('white')
        elBody.classList.remove('red')
        elBody.classList.remove('purple')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "white" || result == "White"){
        elBody.classList.add('white')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('orange')
        elBody.classList.remove('red')
        elBody.classList.remove('purple')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "purple" || result == "Purple"){
        elBody.classList.add('purple')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('orange')
        elBody.classList.remove('red')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }

    else if(result == "brown" || result == "Brown"){
        elBody.classList.add('brown')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('orange')
        elBody.classList.remove('red')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else if(result == "red" || result == "Red"){
        elBody.classList.add('red')
        elBody.classList.remove('black')
        elBody.classList.remove('green')
        elBody.classList.remove('yellow')
        elBody.classList.remove('blue')
        elBody.classList.remove('grey')
        elBody.classList.remove('pink')
        elBody.classList.remove('olive')
        elBody.classList.remove('white')
        elBody.classList.remove('purple')
        elBody.classList.remove('orange')
        elBody.classList.remove('brown')
        eltitle1.classList.remove('none')
        eltitle.classList.remove('block')
    }
    else{
        eltitle.classList.add('block')
        eltitle1.classList.add('none')
    }
}

function handleClickBtn(){
    speech.start()
}