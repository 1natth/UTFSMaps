const btna09 =
document.querySelector("#btn-abrir-modal09");
const btnb09 =
document.querySelector("#btn-cerrar-modal09");
const modala09 =
document.querySelector("#modal09");

btna09.addEventListener("click",()=>{
    modala09.showModal();
})

btnb09.addEventListener("click",()=>{
    modala09.close();
})