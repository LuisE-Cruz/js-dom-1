// Dichiaro i diversi elementi

const on = document.getElementById("lamp-on")
const off = document.getElementById("lamp-off")
const turnOn = document.getElementById("button-on")


//Aggiunto evento al click del bottone 

turnOn.addEventListener("click", () => {

    off.classList.toggle("d-none");
    on.classList.toggle("d-none");

    turnOn.innerText = turnOn.innerText === "Accendi" ? "Spegni" : "Accendi"

}
);
