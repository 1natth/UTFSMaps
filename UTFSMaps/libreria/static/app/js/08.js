const btna08 =
document.querySelector("#btn-abrir-modal08");
const btnb08 =
document.querySelector("#btn-cerrar-modal08");
const modala08 =
document.querySelector("#modal08");

btna08.addEventListener("click",()=>{
    modala08.showModal();
})

btnb08.addEventListener("click",()=>{
    modala08.close();
})