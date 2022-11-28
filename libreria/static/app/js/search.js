var buscador = $("#table").DataTable()

$("#input-search").keyup(function(){

    buscador.search($(this).val()).draw();

    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(200);
    }else{
        $(".content-search").fadeIn(200);
    }
})
const btnAbrirModal =
document.querySelector("#btn-abrir-modal16");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal16");
const modal =
document.querySelector("#modal16");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})
