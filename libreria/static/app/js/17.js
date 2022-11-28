const btna17 =
document.querySelector("#btn-abrir-modal17");
const btnb17 =
document.querySelector("#btn-cerrar-modal17");
const modala17 =
document.querySelector("#modal17");

btna17.addEventListener("click",()=>{
    modala17.showModal();
})

btnb17.addEventListener("click",()=>{
    modala17.close();
})
