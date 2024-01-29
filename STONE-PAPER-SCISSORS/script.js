function play(move) {
  var computer_move = computer();

  if (move == computer_move) {
    result("DRAW!!");
  } else if (move == "paper") {
    if (computer_move == "scissors") {
      result("YOU LOST");
    } else if (computer_move == "stone") {
      result("YOU WIN!");
    }
  } else if (move == "stone") {
    if (computer_move == "paper") {
      result("YOU LOST");
    } else if (computer_move == "scissors") {
      result("YOU WIN!");
    }
  } else if (move == "scissors") {
    if (computer_move == "paper") {
      result("YOU WIN!");
    } else if (computer_move == "stone") {
      result("YOU LOST");
    }
  }
}

function computer() {
  var moves = ["stone", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  console.log(index);
  ai(moves[index]);
  return moves[index];
}

function ai(value) {
  var img = document.getElementById("ai");
  console.log(img);
  if (value == "scissors") {
    img.src = "./src/scissor.png";
  } else if (value == "paper") {
    img.src = "./src/paper.png";
  } else if (value == "stone") {
    img.src = "./src/stone.png";
  }
}

function result(text) {
  document.getElementById("result").textContent = text;
}
