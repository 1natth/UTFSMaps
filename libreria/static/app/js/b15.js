const btnab15 =
document.querySelector("#btn-abrir-modalb15");
const btnbb15 =
document.querySelector("#btn-cerrar-modalb15");
const modalb15 =
document.querySelector("#modalb15");

btnab15.addEventListener("click",()=>{
    modalb15.showModal();
})

btnbb15.addEventListener("click",()=>{
    modalb15.close();
})
