const btnab11 =
document.querySelector("#btn-abrir-modalb11");
const btnbb11 =
document.querySelector("#btn-cerrar-modalb11");
const modalb11 =
document.querySelector("#modalb11");

btnab11.addEventListener("click",()=>{
    modalb11.showModal();
})

btnbb11.addEventListener("click",()=>{
    modalb11.close();
})
