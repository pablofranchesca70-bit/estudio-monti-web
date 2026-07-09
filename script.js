// ESTUDIO MONTI WEB 1.7


function enviarWhatsApp(){

    let telefonoAbogado="5491100000000";

    let mensaje=
    "Hola Dr. Pablo Ricardo Monti, quisiera realizar una consulta jurídica.";


    window.open(
    "https://wa.me/"+telefonoAbogado+
    "?text="+encodeURIComponent(mensaje)
    );

}




// formulario profesional


function enviarFormulario(){


let nombre =
document.getElementById("nombre").value.trim();


let telefono =
document.getElementById("telefono").value.trim();


let consulta =
document.getElementById("consulta").value.trim();



if(nombre==="" || consulta===""){

alert(
"Por favor complete nombre y consulta antes de enviar."
);

return;

}



let telefonoAbogado="1131027285";


let mensaje =

"Hola Dr. Pablo Ricardo Monti.%0A%0A"+
"Nombre: "+nombre+"%0A"+
"Teléfono: "+telefono+"%0A"+
"Consulta: "+consulta;



window.open(

"https://wa.me/"+telefonoAbogado+
"?text="+mensaje,

"_blank"

);


}



// Animacion al cargar

window.addEventListener("load", ()=>{

    document.body.style.opacity = "1";

});
// año automático footer

// Año automático seguro

window.addEventListener("load", ()=>{

let anio =
document.getElementById("anio");


if(anio){

anio.textContent =
new Date().getFullYear();

}


});
