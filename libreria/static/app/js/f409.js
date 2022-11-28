const btnaf409 =
document.querySelector("#btn-abrir-modalf409");
const btnbf409 =
document.querySelector("#btn-cerrar-modalf409");
const modalf409 =
document.querySelector("#modalf409");

btnaf409.addEventListener("click",()=>{
    modalf409.showModal();
})

btnbf409.addEventListener("click",()=>{
    modalf409.close();
})
