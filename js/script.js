"use strict";
const helpMessage = document.getElementById("help-message");
const displayKeyCode = document.getElementById("key-code");
const displayKey = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  helpMessage.classList.add("hide");
  displayKeyCode.innerHTML = event.keyCode;
  displayKey.innerHTML = `Pressed key: ${event.key}`;
});
