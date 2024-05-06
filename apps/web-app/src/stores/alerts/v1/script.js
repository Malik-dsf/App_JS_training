//déclaration const
const btnValidation = document.getElementById("leBoutton");
//[x][1] = mots a choisis et [x][!1] = mots indices

//fonction randint
function getRandomInt(min, max) {
  min = Math.ceil(min); //nb min arrondi
  max = Math.floor(max); // nb max arrondi
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createWord() {
  const wordPossible = [
    ["chaud", "desert", "ebulition", "four"],
    ["code", "ordinateur", "cadena", "verouillez"],
    ["canard", "animal", "étant", "volatile"],
    ["biere", "mousseuse", "alcolisée", "8 mort, 6 blesser"],
  ];
  const nbWord = wordPossible.length;
  const listSelect = wordPossible[getRandomInt(0, nbWord)];
  alert("le mots a était choisir");
  return listSelect;
}

function tentative() {}
