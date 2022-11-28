const btnab64 =
document.querySelector("#btn-abrir-modalb64");
const btnbb64 =
document.querySelector("#btn-cerrar-modalb64");
const modalb64 =
document.querySelector("#modalb64");

btnab64.addEventListener("click",()=>{
    modalb64.showModal();
})

btnbb64.addEventListener("click",()=>{
    modalb64.close();
})
