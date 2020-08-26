let players = [];
let game_over = false;
let turn = 0;

let boardArray = [["","",""],
                  ["","",""],
                  ["","",""]];
                  
const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  let player1 = input1.value;
  let player2 = input2.value;
  
  if(player1==="" || player2==="")
  {
    alert("Player name required.");
    return;
  }

  players.push(player1);
  players.push(player2);

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  document.getElementById("start-button").setAttribute("disabled",true);

  document.getElementById("turn").style.visibility = "visible";
  document.getElementById("board").style.visibility = "visible";

  document.getElementById("turn").innerHTML = "Turn: "+players[0];
}

const handleClick = (el) => {
  
  if(el.innerHTML !== "" || game_over)
  {
    return;
  }
  let id = el.id;
  let i = parseInt(id[0],10);
  let j = parseInt(id[1],10);
  boardArray[i][j] = turn%2===0?"X":"O";
  el.innerHTML = boardArray[i][j];
  if(calculateWinner())
  {
    alert(players[turn%2]+" is the Winner.")
    game_over = true;
    return;
  }
  turn++;
  document.getElementById("turn").innerHTML = "Turn: "+players[turn%2];

  if(turn === 9)
  {
    document.getElementById("turn").innerHTML = "Game Over No Winner";
    game_over = true;
    return;
  }
}

const calculateWinner = () => {
  let winArr = [["00","01","02"],
                ["10","11","12"],
                ["20","21","22"],
                ["00","11","22"],
                ["02","11","20"],
                ["00","10","20"],
                ["01","11","21"],
                ["02","12","22"]];

  for(let i=0;i<winArr.length;i++)
  {
    if(turn < 4)
    {
      return false;
    }
    let [a, b, c] = winArr[i];

    if(boardArray[a[0]][a[1]] !== "" &&
        boardArray[a[0]][a[1]] === boardArray[b[0]][b[1]] &&
        boardArray[a[0]][a[1]] === boardArray[c[0]][c[1]])
    {
      document.getElementById("turn").innerHTML = players[turn%2] + " is the Winner.";
      return true;
    }
  }
}

const resetGame = () => {
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  p1.removeAttribute("disabled");
  p2.removeAttribute("disabled");
  for(let i=0;i<3;i++)
  {
    for(let j=0;j<3;j++)
    {
      let val = i.toString() + j.toString();
      boardArray[i][j] = "";
      document.getElementById(val).innerHTML = "";
    }
  }
  document.getElementById("board").style.visibility = "hidden";
  document.getElementById("turn").style.visibility = "hidden";
  document.getElementById("start-button").removeAttribute("disabled");
  game_over = false;
  turn = 0;
}
