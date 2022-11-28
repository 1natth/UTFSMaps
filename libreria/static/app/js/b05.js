const btnab05 =
document.querySelector("#btn-abrir-modalb05");
const btnbb05 =
document.querySelector("#btn-cerrar-modalb05");
const modalb05 =
document.querySelector("#modalb05");

btnab05.addEventListener("click",()=>{
    modalb05.showModal();
})

btnbb05.addEventListener("click",()=>{
    modalb05.close();
})
