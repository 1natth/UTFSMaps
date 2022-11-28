const btnaf425 =
document.querySelector("#btn-abrir-modalf425");
const btnbf425 =
document.querySelector("#btn-cerrar-modalf425");
const modalf425 =
document.querySelector("#modalf425");

btnaf425.addEventListener("click",()=>{
    modalf425.showModal();
})

btnbf425.addEventListener("click",()=>{
    modalf425.close();
})
