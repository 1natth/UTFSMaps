const btna14 =
document.querySelector("#btn-abrir-modal14");
const btnb14 =
document.querySelector("#btn-cerrar-modal14");
const modala14 =
document.querySelector("#modal14");

btna14.addEventListener("click",()=>{
    modala14.showModal();
})

btnb14.addEventListener("click",()=>{
    modala14.close();
})
