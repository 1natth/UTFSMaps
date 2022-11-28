const btnaf403 =
document.querySelector("#btn-abrir-modalf403");
const btnbf403 =
document.querySelector("#btn-cerrar-modalf403");
const modalf403 =
document.querySelector("#modalf403");

btnaf403.addEventListener("click",()=>{
    modalf403.showModal();
})

btnbf403.addEventListener("click",()=>{
    modalf403.close();
})
