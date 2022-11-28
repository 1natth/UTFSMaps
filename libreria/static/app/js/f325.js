const btnaf325 =
document.querySelector("#btn-abrir-modalf325");
const btnbf325 =
document.querySelector("#btn-cerrar-modalf325");
const modalf325 =
document.querySelector("#modalf325");

btnaf325.addEventListener("click",()=>{
    modalf325.showModal();
})

btnbf325.addEventListener("click",()=>{
    modalf325.close();
})
