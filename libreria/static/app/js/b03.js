const btnab03 =
document.querySelector("#btn-abrir-modalb03");
const btnbb03 =
document.querySelector("#btn-cerrar-modalb03");
const modalb03 =
document.querySelector("#modalb03");

btnab03.addEventListener("click",()=>{
    modalb03.showModal();
})

btnbb03.addEventListener("click",()=>{
    modalb03.close();
})
