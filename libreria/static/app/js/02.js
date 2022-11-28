const btna02 =
document.querySelector("#btn-abrir-modal02");
const btnb02 =
document.querySelector("#btn-cerrar-modal02");
const modala02 =
document.querySelector("#modal02");

btna02.addEventListener("click",()=>{
    modala02.showModal();
})

btnb02.addEventListener("click",()=>{
    modala02.close();
})
