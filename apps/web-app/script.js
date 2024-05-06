// quand on click ça change de couleur
document.getElementById("leBoutton").onclick = function () {
  document.body.style.backgroundColor = changeColor();
  console.log(changeColor());
};

//fonction randint
function getRandomInt(min, max) {
  min = Math.ceil(min); //nb min arrondi
  max = Math.floor(max); // nb max arrondi
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fonction de changement de couleur en code RGB
function randomColorRGB() {
  const colorT = [];

  for (let i = 0; i <= 2; i++) {
    const min = 0;
    const max = 255;
    let randomNumber = getRandomInt(min, max);
    colorT[i] = randomNumber;
  }

  console.log(colorT);
  return colorT;
}

// passage de tableau a string
function changeColor() {
  const color = "rgb(" + String(randomColorRGB()) + ")";
  console.log(color);
  return color;
}
