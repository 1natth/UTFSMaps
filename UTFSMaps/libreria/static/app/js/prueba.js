
//Filtro de busqueda//

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "Li" //
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1 ){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
        
    }

}

var info = {
    'A':{
       '0':{
            '01':{
                "nombre": "Sala A001",
            },
            '02':{
                "nombre": "Sala A002",
            },
            '03':{
                "nombre": "Sala A003",
            },
            '04':{
                "nombre": "Sala A004",
            },
            '05':{
                "nombre": "Sala A005",
            },
            '06':{
                "nombre": "Sala A006",
            },
            '07':{
                "nombre": "Sala A007",
            },
            '08':{
                "nombre": "Sala A008",
            },
            '09':{
                "nombre": "Sala A009",
            },
            '10':{
                "nombre": "Sala A010",
            },
            '11':{
                "nombre": "Sala A011",
            },
            '12':{
                "nombre": "Sala A012",
            },
            '13':{
                "nombre": "Sala A013",
            },
            '14':{
                "nombre": "Sala A014",
            },
            '15':{
                "nombre": "Sala A015",
            },
            '16':{
                "nombre": "Sala A016",
            },
            '17':{
                "nombre": "Sala A017",
            },
        }
    },
    'B':{
        '0':{
            '01':{
                "nombre": "Sala B001",
            },
            '02':{
                "nombre": "Sala B002",
            },
            '03':{
                "nombre": "Sala B003",
            },
            '04':{
                "nombre": "Sala B004",
            },
            '05':{
                "nombre": "Sala B005",
            },
            '06':{
                "nombre": "Sala B006",
            },
            '07':{
                "nombre": "Sala B007",
            },
            '08':{
                "nombre": "Sala B008",
            },
            '09':{
                "nombre": "Sala B009",
            },
            '10':{
                "nombre": "Sala B010",
            },
            '11':{
                "nombre": "Sala B011",
            },
            '12':{
                "nombre": "Sala B012",
            },
            '14':{
                "nombre": "Sala B014",
            },
            '15':{
                "nombre": "Sala B015",
            },
            '21':{
                "nombre": "Sala B021",
            },
            '22':{
                "nombre": "Sala B022",
            },
            '23':{
                "nombre": "Sala B023",
            },
            '31':{
                "nombre": "Sala B031",
            },
            '33':{
                "nombre": "Sala B033",
            },
            '35':{
                "nombre": "Sala B035",
            },
            '37':{
                "nombre": "Sala B037",
            },
            '38':{
                "nombre": "Sala B038",
            },
            '39':{
                "nombre": "Sala B039",
            },
            '44':{
                "nombre": "Sala B044",
            },
            '49':{
                "nombre": "Sala B049",
            },
            '64':{
                "nombre": "Sala B064",
            },
            '65':{
                "nombre": "Sala B065",
            },
        },
        '1':{
            '14':{
                "nombre": "Sala B114",
            },
            '15':{
                "nombre": "Sala B115",
            }
        },
        '2':{
            '01':{
                "nombre": "Sala B201",
            },
            '02':{
                "nombre": "Sala B202",
            },
            '03':{
                "nombre": "Sala B203",
            }
        }
    }
}





function pescar(dic, sala) {
	if (sala.charAt(0) in dic && sala.charAt(1) in dic[sala.charAt(0)] && sala.slice(-2) in dic[sala.charAt(0)][sala.charAt(1)]){
        return dic[sala.charAt(0)][sala.charAt(1)][sala.slice(-2)]['nombre'];
    }else{
        return "No existe la sala";
	}
}
