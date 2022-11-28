const btnab09 =
document.querySelector("#btn-abrir-modalb09");
const btnbb09 =
document.querySelector("#btn-cerrar-modalb09");
const modalb09 =
document.querySelector("#modalb09");

btnab09.addEventListener("click",()=>{
    modalb09.showModal();
})

btnbb09.addEventListener("click",()=>{
    modalb09.close();
})
