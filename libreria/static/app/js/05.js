const btna05 =
document.querySelector("#btn-abrir-modal05");
const btnb05 =
document.querySelector("#btn-cerrar-modal05");
const modala05 =
document.querySelector("#modal05");

btna05.addEventListener("click",()=>{
    modala05.showModal();
})

btnb05.addEventListener("click",()=>{
    modala05.close();
})
