var noOfdrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfdrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    soundPlay(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keydown", function (event) {
  soundPlay(event.key);
  buttonAnimation(event.key);
});

function soundPlay(key) {
  if (key == "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key == "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (key == "s") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key == "d") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key == "j") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key == "k") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key == "l") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
}
