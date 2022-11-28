const btnaf405 =
document.querySelector("#btn-abrir-modalf405");
const btnbf405 =
document.querySelector("#btn-cerrar-modalf405");
const modalf405 =
document.querySelector("#modalf405");

btnaf405.addEventListener("click",()=>{
    modalf405.showModal();
})

btnbf405.addEventListener("click",()=>{
    modalf405.close();
})
