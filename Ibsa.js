const input = document.querySelector("input");
const btn = document.querySelector("button");
const death = document.getElementById("death");
btn.addEventListener('click',  Deathtime)


function Deathtime(){
    const deical = input.value *Math.floor((Math.random() *3));
    death.textContent = deical;  
}

console.log(Math.floor(Math.random()*3+1))


//1. Brukeren skriver alderen og sjønn
//2. må vi ha gj
// hei there 