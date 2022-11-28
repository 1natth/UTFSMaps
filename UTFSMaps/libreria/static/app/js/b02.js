const btnab02 =
document.querySelector("#btn-abrir-modalb02");
const btnbb02 =
document.querySelector("#btn-cerrar-modalb02");
const modalb02 =
document.querySelector("#modalb02");

btnab02.addEventListener("click",()=>{
    modalb02.showModal();
})

btnbb02.addEventListener("click",()=>{
    modalb02.close();
})
