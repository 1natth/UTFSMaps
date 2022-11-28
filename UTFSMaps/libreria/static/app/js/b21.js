const btnab21 =
document.querySelector("#btn-abrir-modalb21");
const btnbb21 =
document.querySelector("#btn-cerrar-modalb21");
const modalb21 =
document.querySelector("#modalb21");

btnab21.addEventListener("click",()=>{
    modalb21.showModal();
})

btnbb21.addEventListener("click",()=>{
    modalb21.close();
})
