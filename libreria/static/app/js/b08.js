const btnab08 =
document.querySelector("#btn-abrir-modalb08");
const btnbb08 =
document.querySelector("#btn-cerrar-modalb08");
const modalb08 =
document.querySelector("#modalb08");

btnab08.addEventListener("click",()=>{
    modalb08.showModal();
})

btnbb08.addEventListener("click",()=>{
    modalb08.close();
})
