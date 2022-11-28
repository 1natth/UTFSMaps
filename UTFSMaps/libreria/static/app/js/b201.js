const btnab201 =
document.querySelector("#btn-abrir-modalb201");
const btnbb201 =
document.querySelector("#btn-cerrar-modalb201");
const modalb201 =
document.querySelector("#modalb201");

btnab201.addEventListener("click",()=>{
    modalb201.showModal();
})

btnbb201.addEventListener("click",()=>{
    modalb201.close();
})
