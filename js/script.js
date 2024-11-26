const memorize = document.querySelector('.memorize-numbers')
const input = document.querySelector('.input-numbers')
const firstNumber = document.getElementById('first-number')
const secondNumber = document.getElementById('second-number')
const thirdNumber = document.getElementById('third-number')
const fourthNumber = document.getElementById('fourth-number')
const fifthNumber = document.getElementById('fifth-number')
const verifyNumber = document.querySelector('.form')
const reset = document.querySelector('.reset')

const numbers = document.getElementById('random-numbers')
const countDown = document.getElementById('countdown')

function randomNumberGenerator () {    
  return Math.ceil(Math.random () * 50)
}

let counter = 10
let uniqueRandomNumbers = []

while (uniqueRandomNumbers.length < 5) {
  let randomNumber = randomNumberGenerator();

  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber)
  }
}

console.log(uniqueRandomNumbers);


const intervalId = setInterval (() => {
  counter--
  countDown.innerText = counter
  if ( counter <= 0) {
    clearInterval(intervalId);
    memorize.classList.toggle('hide')
    input.classList.toggle('hide')
  } 
}, 1000)

numbers.innerText = uniqueRandomNumbers

verifyNumber.addEventListener('submit', (event) => {
  event.preventDefault();

  firstValue = parseInt(firstNumber.value.trim())
  secondValue = parseInt(secondNumber.value.trim())
  thirdValue = parseInt(thirdNumber.value.trim())
  fourthValue = parseInt(fourthNumber.value.trim())
  fifthValue = parseInt(fifthNumber.value.trim())

  let inputArray = []

  inputArray.push(firstValue, secondValue, thirdValue, fourthValue, fifthValue)

  console.log(inputArray);
})





