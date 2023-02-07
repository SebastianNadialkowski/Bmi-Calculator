const heightElement = document.querySelector(".js-height")
const weightElement = document.querySelector(".js-weight")
const resultElement = document.querySelector(".js-result")
const formElement = document.querySelector(".js-form")


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = +heightElement.value;
    const weight = +weightElement.value;
    result = weight/(height*height);
    resultElement.innerText = `${result.toFixed(2)}`;
    

})