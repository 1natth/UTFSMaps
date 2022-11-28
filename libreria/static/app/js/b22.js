const btnab22 =
document.querySelector("#btn-abrir-modalb22");
const btnbb22 =
document.querySelector("#btn-cerrar-modalb22");
const modalb22 =
document.querySelector("#modalb22");

btnab22.addEventListener("click",()=>{
    modalb22.showModal();
})

btnbb22.addEventListener("click",()=>{
    modalb22.close();
})
