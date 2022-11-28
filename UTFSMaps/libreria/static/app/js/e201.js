const btnae201 =
document.querySelector("#btn-abrir-modale201");
const btnbe201 =
document.querySelector("#btn-cerrar-modale201");
const modale201 =
document.querySelector("#modale201");

btnae201.addEventListener("click",()=>{
    modale201.showModal();
})

btnbe201.addEventListener("click",()=>{
    modale201.close();
})
