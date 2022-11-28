const btnab31 =
document.querySelector("#btn-abrir-modalb31");
const btnbb31 =
document.querySelector("#btn-cerrar-modalb31");
const modalb31 =
document.querySelector("#modalb31");

btnab31.addEventListener("click",()=>{
    modalb31.showModal();
})

btnbb31.addEventListener("click",()=>{
    modalb31.close();
})
