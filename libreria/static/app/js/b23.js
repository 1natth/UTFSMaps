const btnab23 =
document.querySelector("#btn-abrir-modalb23");
const btnbb23 =
document.querySelector("#btn-cerrar-modalb23");
const modalb23 =
document.querySelector("#modalb23");

btnab23.addEventListener("click",()=>{
    modalb23.showModal();
})

btnbb23.addEventListener("click",()=>{
    modalb23.close();
})
