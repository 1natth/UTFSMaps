const btnaf406 =
document.querySelector("#btn-abrir-modalf406");
const btnbf406 =
document.querySelector("#btn-cerrar-modalf406");
const modalf406 =
document.querySelector("#modalf406");

btnaf406.addEventListener("click",()=>{
    modalf406.showModal();
})

btnbf406.addEventListener("click",()=>{
    modalf406.close();
})
