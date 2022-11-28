const btnab07 =
document.querySelector("#btn-abrir-modalb07");
const btnbb07 =
document.querySelector("#btn-cerrar-modalb07");
const modalb07 =
document.querySelector("#modalb07");

btnab07.addEventListener("click",()=>{
    modalb07.showModal();
})

btnbb07.addEventListener("click",()=>{
    modalb07.close();
})
