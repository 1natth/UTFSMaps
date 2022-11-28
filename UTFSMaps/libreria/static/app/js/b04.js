const btnab04 =
document.querySelector("#btn-abrir-modalb04");
const btnbb04 =
document.querySelector("#btn-cerrar-modalb04");
const modalb04 =
document.querySelector("#modalb04");

btnab04.addEventListener("click",()=>{
    modalb04.showModal();
})

btnbb04.addEventListener("click",()=>{
    modalb04.close();
})
