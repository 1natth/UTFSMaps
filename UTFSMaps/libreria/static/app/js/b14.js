const btnab14 =
document.querySelector("#btn-abrir-modalb14");
const btnbb14 =
document.querySelector("#btn-cerrar-modalb14");
const modalb14 =
document.querySelector("#modalb14");

btnab14.addEventListener("click",()=>{
    modalb14.showModal();
})

btnbb14.addEventListener("click",()=>{
    modalb14.close();
})
