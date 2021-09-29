const game = document.querySelector(".game");
const restartButton = document.querySelector(".restart");
const finishsection = document.querySelector(".finish");

const cross = '<i class="fas fa-times cross">';
const circle = '<i class="far fa-circle circle">';

let p1 = true;
let p2 = false;

game.addEventListener("click", play);
restartButton.addEventListener("click", restartGame);

function play(e) {
  e.stopPropagation();
  const click = e.target;
  //console.log(click.children[0]);

  if (p1 == true && p2 == false) {
    if (click.children.length == 0) {
      click.innerHTML = cross;
      p1 = false;
      p2 = true;

      setTimeout(checkWin, 500);
    }
  } else {
    if (click.children.length == 0) {
      e.target.innerHTML = circle;
      p1 = true;
      p2 = false;

      setTimeout(checkWin, 10);
    }
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    let c1 = game.children[0].children[i].children[0];
    let c2 = game.children[1].children[i].children[0];
    let c3 = game.children[2].children[i].children[0];
    if (c1 != undefined && c2 != undefined && c3 != undefined) {
      if (c1.isEqualNode(c2) && c1.isEqualNode(c3) && c2.isEqualNode(c3)) {
        alert(`Win!! ${c1.classList}`);
        return;
      }
    }

    let r1 = game.children[i].children[0].children[0];
    let r2 = game.children[i].children[1].children[0];
    let r3 = game.children[i].children[2].children[0];
    if (r1 != undefined && r2 != undefined && r3 != undefined) {
      if (r1.isEqualNode(r2) && r1.isEqualNode(r3) && r2.isEqualNode(r3)) {
        alert(`Win!! ${r1.classList}`);
        return;
      }
    }
  }

  let d1 = game.children[0].children[0].children[0];
  let d2 = game.children[1].children[1].children[0];
  let d3 = game.children[2].children[2].children[0];
  if (d1 != undefined && d2 != undefined && d3 != undefined) {
    if (d1.isEqualNode(d2) && d1.isEqualNode(d3) && d2.isEqualNode(d3)) {
      alert(`Win!! ${d1.classList}`);
      return;
    }
  }

  d1 = game.children[0].children[2].children[0];
  d2 = game.children[1].children[1].children[0];
  d3 = game.children[2].children[0].children[0];
  if (d1 != undefined && d2 != undefined && d3 != undefined) {
    if (d1.isEqualNode(d2) && d1.isEqualNode(d3) && d2.isEqualNode(d3)) {
      alert(`Win!! ${d1.classList}`);
      return;
    }
  }
  boardIsFull();
}

function restartGame(e) {
  finishsection.classList.add("visibility");
  game.classList.remove("visibility");
}

function boardIsFull() {
  console.clear();
  let completed = 0;
  for (let i = 0; i < 3; i++) {
    let c1 = game.children[0].children[i].children[0];
    let c2 = game.children[1].children[i].children[0];
    let c3 = game.children[2].children[i].children[0];

    if (c1 != undefined && c2 != undefined && c3 != undefined) {
      completed += 1;
    }
  }
  if (completed == 3) {
    drawGame();
    return;
  }
}

function drawGame() {
  finishsection.classList.remove("visibility");
  game.classList.add("visibility");

  for (let i = 0; i < 3; i++) {
    let c1 = game.children[0].children[i];
    let c2 = game.children[1].children[i];
    let c3 = game.children[2].children[i];

    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
  }
}
