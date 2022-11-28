const btnaf408 =
document.querySelector("#btn-abrir-modalf408");
const btnbf408 =
document.querySelector("#btn-cerrar-modalf408");
const modalf408 =
document.querySelector("#modalf408");

btnaf408.addEventListener("click",()=>{
    modalf408.showModal();
})

btnbf408.addEventListener("click",()=>{
    modalf408.close();
})
