const btnae202 =
document.querySelector("#btn-abrir-modale202");
const btnbe202 =
document.querySelector("#btn-cerrar-modale202");
const modale202 =
document.querySelector("#modale202");

btnae202.addEventListener("click",()=>{
    modale202.showModal();
})

btnbe202.addEventListener("click",()=>{
    modale202.close();
})
