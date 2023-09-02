const inputSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputSizeControl.addEventListener("input", onRageChange);

function onRageChange(event) {
const fontSize = event.target.value + 'px';
spanText.style.fontSize = fontSize;
}