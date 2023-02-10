{
    const onFormSubmit = (event) => {
        event.preventDefault();
        const heightElement = document.querySelector(".js-height");
        const weightElement = document.querySelector(".js-weight");
        const height = +heightElement.value;
        const weight = +weightElement.value;
        calculateResult(height, weight);
    }
    const calculateResult = (height, weight, result) => {
        const resultElement = document.querySelector(".js-result");
        result = weight / (height * height / 10000);
        resultElement.innerText = `${result.toFixed(2)}`;
        
        if (result <= 16) {
            document.getElementById("result").innerHTML = "wygłodzenie";
        } else if (result >= 16 && result <= 16.99) {
            document.getElementById("result").innerHTML = "wychudzenie";
        } else if (result >= 17 && result <= 18.49) {
            document.getElementById("result").innerHTML = "niedowaga";
        } else if (result >= 18.5 && result <= 24.9) {
            document.getElementById("result").innerHTML = "prawidłowe";
        } else if (result >= 25 && result <= 29.9) {
            document.getElementById("result").innerHTML = "nadwaga";
        } else if (result >= 30 && result <= 34.9) {
            document.getElementById("result").innerHTML = "I stopień otyłości";
        } else if (result >= 35 && result <= 39.9) {
            document.getElementById("result").innerHTML = "II stopień otyłości";
        } else if (result >= 40 && result <= 999999) {
            document.getElementById("result").innerHTML = "otyłość skrajna";
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}





