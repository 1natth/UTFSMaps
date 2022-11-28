const btna06 =
document.querySelector("#btn-abrir-modal06");
const btnb06 =
document.querySelector("#btn-cerrar-modal06");
const modala06 =
document.querySelector("#modal06");

btna06.addEventListener("click",()=>{
    modala06.showModal();
})

btnb06.addEventListener("click",()=>{
    modala06.close();
})