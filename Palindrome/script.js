const btn = document.querySelector(".btn");
const result = document.querySelector(".result");




btn.addEventListener("click",()=>{
    
    var word = document.querySelector(".input-text");
    
    let len = word.value.length;

    let start = word.value.substring(0,Math.floor(len/2)).
    toLowerCase();
    let end = word.value.substring(len - Math.floor(len/2)).
    toLowerCase();
    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");
    if(start == flip){
        result.innerHTML = `${word.value.toUpperCase()} is a palindrome`;
        
    }
    else{
        result.innerHTML = `${word.value.toUpperCase()} is not 
        a palindrome`;
        
    }
   word.value = ""
} );