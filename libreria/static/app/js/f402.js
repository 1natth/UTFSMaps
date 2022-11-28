const btnaf402 =
document.querySelector("#btn-abrir-modalf402");
const btnbf402 =
document.querySelector("#btn-cerrar-modalf402");
const modalf402 =
document.querySelector("#modalf402");

btnaf402.addEventListener("click",()=>{
    modalf402.showModal();
})

btnbf402.addEventListener("click",()=>{
    modalf402.close();
})
