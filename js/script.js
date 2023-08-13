"use strict";
const helpMessage = document.getElementById("help-message");
const displayKeyCode = document.getElementById("key-code");
const displayKey = document.getElementById("key");
const audio = document.getElementById("audio");

document.addEventListener("keydown", function (event) {
  helpMessage.classList.add("hide");

  audio.currentTime = 0;
  audio.play();

  displayKeyCode.innerHTML = event.keyCode;
  displayKey.innerHTML = `Pressed key: ${event.key}`;
});
