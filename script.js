function playGame(userChoice) {
  var choices;
  var computerChoice;

choices = ['rock', 'paper', 'scissors'];
computerChoice = choices[Math.floor(Math.random() * 3)];

if (userChoice == computerChoice) {
    document.getElementById('result').innerText = "It's a tie!";
  } else if (userChoice == 'rock' && computerChoice == 'scissors') {
    document.getElementById('result').innerText ="You win! "+userChoice+" beats "+computerChoice;
  } else if (userChoice == 'scissors' && computerChoice == 'paper') {
    document.getElementById('result').innerText = "You win! "+userChoice+" beats "+computerChoice;
  } else if (userChoice == 'paper' && computerChoice == 'rock') {
    document.getElementById('result').innerText = "You win! "+userChoice+" beats "+computerChoice;
  } else {
    document.getElementById('result').innerText = "You lose! "+computerChoice+" beats "+userChoice;
  }
}