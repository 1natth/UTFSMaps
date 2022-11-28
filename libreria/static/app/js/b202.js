const btnab202 =
document.querySelector("#btn-abrir-modalb202");
const btnbb202 =
document.querySelector("#btn-cerrar-modalb202");
const modalb202 =
document.querySelector("#modalb202");

btnab202.addEventListener("click",()=>{
    modalb202.showModal();
})

btnbb202.addEventListener("click",()=>{
    modalb202.close();
})
