const btnaf411 =
document.querySelector("#btn-abrir-modalf411");
const btnbf411 =
document.querySelector("#btn-cerrar-modalf411");
const modalf411 =
document.querySelector("#modalf411");

btnaf411.addEventListener("click",()=>{
    modalf411.showModal();
})

btnbf411.addEventListener("click",()=>{
    modalf411.close();
})
