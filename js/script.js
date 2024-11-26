const memorize = document.querySelector('.memorize-numbers')
const input = document.querySelector('.input-numbers')

const numbers = document.getElementById('random-numbers')
const countDown = document.getElementById('countdown')
let counter = 10

let uniqueRandomNumbers = []

while (uniqueRandomNumbers.length < 5) {
  let randomNumber = randomNumberGenerator();

  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber)
  }
}

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

console.log(uniqueRandomNumbers);

function randomNumberGenerator () {    
  return Math.ceil(Math.random () * 50)
}

