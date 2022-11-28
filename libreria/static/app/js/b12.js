const btnab12 =
document.querySelector("#btn-abrir-modalb12");
const btnbb12 =
document.querySelector("#btn-cerrar-modalb12");
const modalb12 =
document.querySelector("#modalb12");

btnab12.addEventListener("click",()=>{
    modalb12.showModal();
})

btnbb12.addEventListener("click",()=>{
    modalb12.close();
})
