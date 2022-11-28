const btnaf400 =
document.querySelector("#btn-abrir-modalf400");
const btnbf400 =
document.querySelector("#btn-cerrar-modalf400");
const modalf400 =
document.querySelector("#modalf400");

btnaf400.addEventListener("click",()=>{
    modalf400.showModal();
})

btnbf400.addEventListener("click",()=>{
    modalf400.close();
})
