const btnab06 =
document.querySelector("#btn-abrir-modalb06");
const btnbb06 =
document.querySelector("#btn-cerrar-modalb06");
const modalb06 =
document.querySelector("#modalb06");

btnab06.addEventListener("click",()=>{
    modalb06.showModal();
})

btnbb06.addEventListener("click",()=>{
    modalb06.close();
})
