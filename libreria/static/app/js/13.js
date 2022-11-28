const btna13 =
document.querySelector("#btn-abrir-modal13");
const btnb13 =
document.querySelector("#btn-cerrar-modal13");
const modala13 =
document.querySelector("#modal13");

btna13.addEventListener("click",()=>{
    modala13.showModal();
})

btnb13.addEventListener("click",()=>{
    modala13.close();
})