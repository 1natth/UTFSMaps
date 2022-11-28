const btna11 =
document.querySelector("#btn-abrir-modal11");
const btnb11 =
document.querySelector("#btn-cerrar-modal11");
const modala11 =
document.querySelector("#modal11");

btna11.addEventListener("click",()=>{
    modala11.showModal();
})

btnb11.addEventListener("click",()=>{
    modala11.close();
})