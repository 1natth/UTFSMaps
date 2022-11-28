const btnaqr3 =
document.querySelector("#btn-abrir-modalqr3");
const btnbqr3 =
document.querySelector("#btn-cerrar-modalqr3");
const modalqr3 =
document.querySelector("#modalqr3");

btnaqr3.addEventListener("click",()=>{
    modalqr3.showModal();
})

btnbqr3.addEventListener("click",()=>{
    modalqr3.close();
})
