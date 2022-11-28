const btnaf401 =
document.querySelector("#btn-abrir-modalf401");
const btnbf401 =
document.querySelector("#btn-cerrar-modalf401");
const modalf401 =
document.querySelector("#modalf401");

btnaf401.addEventListener("click",()=>{
    modalf401.showModal();
})

btnbf401.addEventListener("click",()=>{
    modalf401.close();
})
