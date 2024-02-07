const generateRandomNumber = (max) => Math.floor(Math.random() * max);

const createArrayNumbers = (n) => Array.from({ length: n }, (_, i) => i + 1);

const sortArrayAscending = (arr) => arr.sort();

const shuffleArray = (arr) => {
  const shuffledArray = [];

  for (let i = 0; i < arr.length; i++) {
    randomEl = arr[generateRandomNumber(arr.length)];

    while (shuffledArray.includes(randomEl)) {
      randomEl = arr[generateRandomNumber(arr.length)];
    }

    shuffledArray.push(randomEl);
  }

  return shuffledArray;
};

const displayArray = (arr) => {
  if ("content" in document.createElement("template")) {
    const nEl = document.getElementById("nElTemplate");

    arr.forEach((el) => {
      const nElClone = nEl.content.cloneNode(true);
      nElClone.querySelector("p").innerText = el;
      nElsContainer.appendChild(nElClone);
    });
  }
};

const clearArrayDisplay = () => (nElsContainer.innerHTML = "");

const shuffleButton = document.getElementById("shuffleBtn");
const sortButton = document.getElementById("sortBtn");
const nElsContainer = document.querySelector(".numbers-container");

const n = 9;

const nArray = createArrayNumbers(n);

displayArray(nArray);

shuffleButton.addEventListener("click", () => {
  const shuffledArray = shuffleArray(nArray);
  clearArrayDisplay();
  displayArray(shuffledArray);
});

sortButton.addEventListener("click", () => {
  clearArrayDisplay();
  displayArray(nArray);
});
