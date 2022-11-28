const btna04 =
document.querySelector("#btn-abrir-modal04");
const btnb04 =
document.querySelector("#btn-cerrar-modal04");
const modala04 =
document.querySelector("#modal04");

btna04.addEventListener("click",()=>{
    modala04.showModal();
})

btnb04.addEventListener("click",()=>{
    modala04.close();
})