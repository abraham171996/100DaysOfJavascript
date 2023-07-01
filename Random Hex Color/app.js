const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const copy = document.querySelector(".copy")
const text = document.querySelector("p")
const generateColor = () => {
    const randomColor = Math.random().toString(16).slice(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
    text.textContent = ""
}

btn.addEventListener("click",generateColor);

const copyText = ()=>{
    navigator.clipboard.writeText(hex.textContent);
    text.textContent =`The hex code of the color has been copied`
}
copy.addEventListener('click',copyText)