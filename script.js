let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");

        //backend
        habilidades[0].classList.add("level-high");
        habilidades[1].classList.add("level-medium");
        habilidades[2].classList.add("level-low");
        habilidades[3].classList.add("level-low");

        //frontend
        habilidades[4].classList.add("level-high");
        habilidades[5].classList.add("level-medium");
        habilidades[6].classList.add("level-medium");
        habilidades[7].classList.add("level-low");

        //database
        habilidades[8].classList.add("level-medium");
        habilidades[9].classList.add("level-medium");
        habilidades[10].classList.add("level-medium");
        habilidades[11].classList.add("level-low");
        habilidades[12].classList.add("level-low");

        //other skills
        habilidades[13].classList.add("level-high");
        habilidades[14].classList.add("level-medium");
        habilidades[15].classList.add("level-medium");
        habilidades[16].classList.add("level-medium");
        habilidades[17].classList.add("level-low");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 