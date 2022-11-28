const btnaf404 =
document.querySelector("#btn-abrir-modalf404");
const btnbf404 =
document.querySelector("#btn-cerrar-modalf404");
const modalf404 =
document.querySelector("#modalf404");

btnaf404.addEventListener("click",()=>{
    modalf404.showModal();
})

btnbf404.addEventListener("click",()=>{
    modalf404.close();
})
