const bntCountDecrement = document.querySelector('[data-action="decrement"]');
const bntCountIncrement = document.querySelector('[data-action="increment"]');
const initialValue = document.querySelector("#value");

let counterValue = 0; 

const decrementHandler = () => {
    counterValue -= 1;
    initialValue.textContent = counterValue;
};


const incrementHandler = () => {
    counterValue += 1;
    initialValue.textContent = counterValue;
};
bntCountDecrement.addEventListener("click", decrementHandler);
bntCountIncrement.addEventListener("click", incrementHandler);
