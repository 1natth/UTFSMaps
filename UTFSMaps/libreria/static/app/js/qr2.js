const btnaqr2 =
document.querySelector("#btn-abrir-modalqr2");
const btnbqr2 =
document.querySelector("#btn-cerrar-modalqr2");
const modalqr2 =
document.querySelector("#modalqr2");

btnaqr2.addEventListener("click",()=>{
    modalqr2.showModal();
})

btnbqr2.addEventListener("click",()=>{
    modalqr2.close();
})
