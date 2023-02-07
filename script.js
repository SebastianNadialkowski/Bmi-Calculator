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

   
    if (result<= 16) {
        document.getElementById("result").innerHTML="wygłodzenie";
    } else if (result >= 16 && result <= 16,99){
        document.getElementById("result").innerHTML="wychudzenie";
    } else if (result >= 17 && result <= 18,49) {
        document.getElementById("result").innerHTML="niedowaga";
    } else if (result >= 18,5 && result <= 24,9) {
        document.getElementById("result").innerHTML="prawidłowa";
    } else if (result >= 25 && result <= 29,9) {
    document.getElementById("result").innerHTML="nadwaga";
    }
})