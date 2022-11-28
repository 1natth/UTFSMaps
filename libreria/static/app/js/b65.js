const btnab65 =
document.querySelector("#btn-abrir-modalb65");
const btnbb65 =
document.querySelector("#btn-cerrar-modalb65");
const modalb65 =
document.querySelector("#modalb65");

btnab65.addEventListener("click",()=>{
    modalb65.showModal();
})

btnbb65.addEventListener("click",()=>{
    modalb65.close();
})
