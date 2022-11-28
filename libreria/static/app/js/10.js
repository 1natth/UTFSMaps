const btna10 =
document.querySelector("#btn-abrir-modal10");
const btnb10 =
document.querySelector("#btn-cerrar-modal10");
const modala10 =
document.querySelector("#modal10");

btna10.addEventListener("click",()=>{
    modala10.showModal();
})

btnb10.addEventListener("click",()=>{
    modala10.close();
})