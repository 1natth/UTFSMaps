const btnab10 =
document.querySelector("#btn-abrir-modalb10");
const btnbb10 =
document.querySelector("#btn-cerrar-modalb10");
const modalb10 =
document.querySelector("#modalb10");

btnab10.addEventListener("click",()=>{
    modalb10.showModal();
})

btnbb10.addEventListener("click",()=>{
    modalb10.close();
})
