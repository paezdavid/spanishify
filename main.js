

const textField = document.querySelector('.textField')
const button = document.querySelector('button')
const main = document.querySelector('main')
const engVerb = document.querySelector('.engVerb')
const espVerb = document.querySelector('.espVerb')
const results = document.querySelector('.results')
const errorMessage = document.querySelector('.errorMessage')
const yo = document.querySelector('#yo')
const tu = document.querySelector('#tu')
const el = document.querySelector('#el')
const nos = document.querySelector('#nos')
const vos = document.querySelector('#vos')
const ellos = document.querySelector('#ellos')
const conjVerbArray = document.getElementsByClassName('conjVerb')


const arrayOfVerbs = []

results.style.display = "none"
errorMessage.style.display = "none"

function spanishifyVerb(userInput) {
    if (userInput.charAt(userInput.length - 1) == "a" ||
        userInput.charAt(userInput.length - 1) == "e" ||
        userInput.charAt(userInput.length - 1) == "i" ||
        userInput.charAt(userInput.length - 1) == "o" ||
        userInput.charAt(userInput.length - 1) == "u"   
    ) {
        console.log("this word ends with a vowel")
        espVerb.textContent = userInput + "ar"
        conjVerbArray[0].textContent = userInput + "o"
        conjVerbArray[1].textContent = userInput + "as"
        conjVerbArray[2].textContent = userInput + "a"
        conjVerbArray[3].textContent = userInput + "amos"
        conjVerbArray[4].textContent = userInput + "áis"
        conjVerbArray[5].textContent = userInput + "an"
        results.style.display = "block"
    } else {
        console.log("this word ends with a consonant")
        espVerb.textContent = userInput + "ear"
        conjVerbArray[0].textContent = userInput + "eo"
        conjVerbArray[1].textContent = userInput + "eas"
        conjVerbArray[2].textContent = userInput + "ea"
        conjVerbArray[3].textContent = userInput + "eamos"
        conjVerbArray[4].textContent = userInput + "eáis"
        conjVerbArray[5].textContent = userInput + "ean"
        results.style.display = "block"
    }

    if (userInput.charAt(userInput.length - 1) == "g") {
        espVerb.textContent = userInput + "uear"
        conjVerbArray[0].textContent = userInput + "ueo"
        conjVerbArray[1].textContent = userInput + "ueas"
        conjVerbArray[2].textContent = userInput + "uea"
        conjVerbArray[3].textContent = userInput + "ueamos"
        conjVerbArray[4].textContent = userInput + "ueáis"
        conjVerbArray[5].textContent = userInput + "uean"
    }
}


function fetchTxtContent(file) {
    fetch(file)
        .then(response => response.json())
        .then(text => {
            arrayOfVerbs.push(text)
            button.addEventListener('click', () => {
                if (textField.value == "") { return }

                if (arrayOfVerbs[0].includes(textField.value.toLowerCase())) {
                    console.log("found it!")
                    engVerb.textContent = textField.value.toLowerCase()
                    errorMessage.style.display = "none"
                    main.style.display = "block"
                    spanishifyVerb(textField.value.toLowerCase())

                } else {
                    console.log("nop")
                    results.style.display = "none"
                    main.style.display = "none"
                    errorMessage.style.display = "block"
                }

                textField.value = ""
            })
        })
        .catch(err => {console.log(err)})


}



fetchTxtContent('1000_verbs.txt')
