const btnae203 =
document.querySelector("#btn-abrir-modale203");
const btnbe203 =
document.querySelector("#btn-cerrar-modale203");
const modale203 =
document.querySelector("#modale203");

btnae203.addEventListener("click",()=>{
    modale203.showModal();
})

btnbe203.addEventListener("click",()=>{
    modale203.close();
})
