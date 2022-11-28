const btnaf410 =
document.querySelector("#btn-abrir-modalf410");
const btnbf410 =
document.querySelector("#btn-cerrar-modalf410");
const modalf410 =
document.querySelector("#modalf410");

btnaf410.addEventListener("click",()=>{
    modalf410.showModal();
})

btnbf410.addEventListener("click",()=>{
    modalf410.close();
})
