const btna07 =
document.querySelector("#btn-abrir-modal07");
const btnb07 =
document.querySelector("#btn-cerrar-modal07");
const modala07 =
document.querySelector("#modal07");

btna07.addEventListener("click",()=>{
    modala07.showModal();
})

btnb07.addEventListener("click",()=>{
    modala07.close();
})