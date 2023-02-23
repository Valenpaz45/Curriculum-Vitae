var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let pc = document.getElementById("pc");
crearBarra(pc);
let español = document.getElementById("español");
crearBarra(español);
let ingles = document.getElementById("ingles");
crearBarra(ingles);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 9, 0, intervalHtml);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 6, 1, intervalCss);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 4, 2, intervalJavascript);
        },100);
        const intervalPC = setInterval(function(){
            pintarBarra(pc, 16, 3, intervalPC);
        },100);
        const intervalEspañol = setInterval(function(){
            pintarBarra(español, 18, 4, intervalEspañol);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 8, 5, intervalIngles);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#00B6FF";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}