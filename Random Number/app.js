const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
        const randomNumber = Math.floor(Math.random()*100 + 1);
        number.innerHTML = randomNumber;
}

btn.addEventListener("click",generateNumber);