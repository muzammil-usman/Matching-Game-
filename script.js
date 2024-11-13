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
score.innerText = "Score :";
triesLeft.innerText = "Tries Left : ";
statusBar.appendChild(score);
statusBar.appendChild(triesLeft);

let boxesCont = document.createElement("div");
boxesCont.setAttribute("class", "boxesCont");
mainDiv.appendChild(boxesCont);

for (let i = 0; i < 20; i++) {
  let boxes = document.createElement("div");
  boxes.setAttribute("class", "boxes");
  boxes.style.backgroundColor = "red";
  boxesCont.appendChild(boxes);
}
