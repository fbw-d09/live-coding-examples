const randomNum = () => Math.floor(Math.random() * 10) + 1;

const guessingGame = () => {
  let count = 1;
  let numberToGuess = randomNum();
  let guess = parseInt(prompt("Guess a number 1-10"));
  while (guess !== numberToGuess && count < 3) {
    guess = parseInt(prompt("Try again!!"));
    count++; // count +=1 // count + count +1
  }
  if (guess === numberToGuess && count <= 3) {
    alert("YAY, you win 🥳");
  } else {
    alert("Sorry 😭");
  }
};

guessingGame();
