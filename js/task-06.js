const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
    const symbolLength = Number(inputField.dataset.length);
    const inputCotentLEngth = inputField.value.trim();

    if (inputCotentLEngth === symbolLength) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}