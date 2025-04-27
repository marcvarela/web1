

function cc(){
    
    
    let fondo = document.getElementById("fondo");
    switch(fondo.style.backgroundColor){
        case "white":
            fondo.style.backgroundColor = "lightblue";
            break;
        case "lightblue":
            fondo.style.backgroundColor = "white";
            break;
        default:
            fondo.style.backgroundColor = "lightblue";
    }

    
}
function ocultar(){
    
    
    let fondo = document.getElementById("fondo");
    switch(fondo.style.display){
        case "block":
            fondo.style.display = "none";
            break;
        case "none":
            fondo.style.display = "block";
            
            break;
        default:
            fondo.style.display = "block";
    }

    
}