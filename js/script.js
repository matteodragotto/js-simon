let uniqueRandomNumbers = []

while (uniqueRandomNumbers.length < 5) {
  let randomNumber = randomNumberGenerator();

  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber)
  }
}

console.log(uniqueRandomNumbers);

function randomNumberGenerator () {    
  return Math.ceil(Math.random () * 50)
}

