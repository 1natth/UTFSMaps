const btna03 =
document.querySelector("#btn-abrir-modal03");
const btnb03 =
document.querySelector("#btn-cerrar-modal03");
const modala03 =
document.querySelector("#modal03");

btna03.addEventListener("click",()=>{
    modala03.showModal();
})

btnb03.addEventListener("click",()=>{
    modala03.close();
})