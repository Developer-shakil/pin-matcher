// pin generate function
let pinOutput = document.getElementById("pinOutput");
function getPin() {
  let generatePin = Math.random() * 9000;
  var newPin = 1000 + Math.floor(generatePin);
  pinOutput.value = newPin;
}
let buttons = document.getElementsByClassName("button");
let pinInput = document.getElementById("pinInput");
let pinValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "C") {
      pinValue = "";
      pinInput.value = pinValue;
    } else if (buttonText == "<") {
      var bsp = pinInput.value;
      lsp = bsp.substring(0, bsp.length - 1);
      pinInput.value = lsp;
    } else {
      pinValue += buttonText;
      pinInput.value = pinValue;
    }
  });
}
let wrongPin = document.getElementById("wrong-pin-msg");
let rightPin = document.getElementById("right-pin-msg");
let actionText = document.getElementById("action-text");
function pinMatch() {
  if (pinOutput.value == pinInput.value) {
    rightPin.style.display = "block";
    wrongPin.style.display = "none";
  } else {
    wrongPin.style.display = "block";
    rightPin.style.display = "none";
    actionMsg();
  }
}
var counter = 0;
function actionMsg() {
  if (counter < 3) {
    actionText.innerText = counter + " try left";
    counter++;
  } else {
    document.getElementById("submitBtn").style.backgroundClip = "gray";
    counter++;
  }
}
