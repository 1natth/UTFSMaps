const btnab203 =
document.querySelector("#btn-abrir-modalb203");
const btnbb203 =
document.querySelector("#btn-cerrar-modalb203");
const modalb203 =
document.querySelector("#modalb203");

btnab203.addEventListener("click",()=>{
    modalb203.showModal();
})

btnbb203.addEventListener("click",()=>{
    modalb203.close();
})
