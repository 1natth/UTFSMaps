const btna01 =
document.querySelector("#btn-abrir-modal01");
const btnb01 =
document.querySelector("#btn-cerrar-modal01");
const modala01 =
document.querySelector("#modal01");

btna01.addEventListener("click",()=>{
    modala01.showModal();
})

btnb01.addEventListener("click",()=>{
    modala01.close();
})
