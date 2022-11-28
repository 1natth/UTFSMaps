const btna15 =
document.querySelector("#btn-abrir-modal15");
const btnb15 =
document.querySelector("#btn-cerrar-modal15");
const modala15 =
document.querySelector("#modal15");

btna15.addEventListener("click",()=>{
    modala15.showModal();
})

btnb15.addEventListener("click",()=>{
    modala15.close();
})
