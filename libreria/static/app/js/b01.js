const btnab01 =
document.querySelector("#btn-abrir-modalb01");
const btnbb01 =
document.querySelector("#btn-cerrar-modalb01");
const modalb01 =
document.querySelector("#modalb01");

btnab01.addEventListener("click",()=>{
    modalb01.showModal();
})

btnbb01.addEventListener("click",()=>{
    modalb01.close();
})
