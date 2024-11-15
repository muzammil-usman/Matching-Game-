var colors = ["red", "yellow", "green", "purple", "blue"];
let scoreCounter = 0;
let triesCounter = 0;

let main = document.getElementById("main");
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "mainDiv");
main.appendChild(mainDiv);

let h1 = document.createElement("h1");
h1.innerText = "Match the Colours";
h1.style.fontSize = "3rem";
mainDiv.appendChild(h1);

let statusBar = document.createElement("div");
statusBar.setAttribute("class", "statusBar");
mainDiv.appendChild(statusBar);

let score = document.createElement("span");
let triesLeft = document.createElement("span");
triesLeft.innerText = "Tries Left : ";
statusBar.appendChild(score);
statusBar.appendChild(triesLeft);

let matchDes = document.createElement("div");
matchDes.innerText =
  "Match the boxes that having same color which are given below";
mainDiv.appendChild(matchDes);
let matcher = document.createElement("div");
matcher.setAttribute("class", "matcher");
mainDiv.appendChild(matcher);

let boxesCont = document.createElement("div");
boxesCont.setAttribute("class", "boxesCont");
mainDiv.appendChild(boxesCont);

for (let i = 0; i < 16; i++) {
  let boxes = document.createElement("div");
  boxes.setAttribute("class", "boxes");
  boxes.setAttribute("onClick", "toMatch(event)");
  boxes.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
  boxesCont.appendChild(boxes);
}

function toUpdate() {
  matcher.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
}
toUpdate();

function toMatch(e) {
  if (e.target.style.backgroundColor === matcher.style.backgroundColor) {
    scoreCounter++;
    console.log(true);
    toUpdate;
    return;
  }
  console.log(false);
}
score.innerText = "Score : " + scoreCounter;
