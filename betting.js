let awayTeam = document.getElementById("awayTeam").innerText;
let homeTeam = document.getElementById("homeTeam").innerText;
let awayScore = 0;
let homeScore = 0;
let playerTeam = "";
let spread = [3, -3];
// let bank = document.getElementById('bank')
let wagerAmount = document.getElementById("wager");
let bankAmount = document.getElementById("bank");
let submitbtn = document.getElementById("submitbtn");

const createScore = () => {
  return Math.floor(Math.random() * (127 - 100) + 100);
};

const teamScores = () => {
  awayScore = createScore();
  homeScore = createScore();
};

const winningTeamFunc = () => {
  if (awayScore + spread[0] > homeScore + spread[1]) {
    return awayTeam;
  } else {
    return homeTeam;
  }
};

const playerResult = (winner) => {
  if ((playerTeam = winner)) {
    return true;
  } else {
    return false;
  }
};

const result = () => {
  teamScores();
  winningTeam = winningTeamFunc();
  playerWin = playerResult(winningTeam);
  console.log(`${awayTeam}: ${awayScore}  ${homeTeam}: ${homeScore}`);
  console.log(`Winning Team = ${winningTeam} playerResult: ${playerWin}`);
  if (playerWin) {
    winBet()
  }
};


const calcWager = () => {
    playerTeam = document.getElementById("wagerSelection").value
  bankAmount.innerText -= wagerAmount.value;
  setTimeout(() => {
    result();
  }, "1000")
  // let bank = bank.innerText;
  // console.log(bankAmount)
};
// calcWager()

const winBet = () => {
  bankAmount.innerText = bankAmount.innerText + parseInt(wagerAmount.value) * 2;
  console.log(bankAmount);
};
// winBet(true)
let testFunc = () => {
  console.log(bankAmount.innerText);
  console.log(wagerAmount.value);
};
submitbtn.addEventListener("click", calcWager);
