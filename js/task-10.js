const input = document.querySelector('input[type="number" ]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount) {

  for (let i = 0; i <amount; i ++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxesDiv.append(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (!isNaN(amount)) {
    createBoxes(amount);
  }
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
