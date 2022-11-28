const int_open=
document.querySelector("#int_open");
const int_close =
document.querySelector("#int_close");
const int_mod =
document.querySelector("#int_mod");

int_open.addEventListener("click",()=>{
    int_mod.showModal();
})

int_close.addEventListener("click",()=>{
    int_mod.close();
})
