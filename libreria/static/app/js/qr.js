const btnaqr =
document.querySelector("#btn-abrir-modalqr");
const btnbqr =
document.querySelector("#btn-cerrar-modalqr");
const modalqr =
document.querySelector("#modalqr");

btnaqr.addEventListener("click",()=>{
    modalqr.showModal();
})

btnbqr.addEventListener("click",()=>{
    modalqr.close();
})
