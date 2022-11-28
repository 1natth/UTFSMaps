const btna12 =
document.querySelector("#btn-abrir-modal12");
const btnb12 =
document.querySelector("#btn-cerrar-modal12");
const modala12 =
document.querySelector("#modal12");

btna12.addEventListener("click",()=>{
    modala12.showModal();
})

btnb12.addEventListener("click",()=>{
    modala12.close();
})