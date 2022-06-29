function cambiarTarjetaFondoClaro(tarjeta) {
  try
  {
    // Selecting elements with class test
    var matches = document.getElementsByClassName(tarjeta);

    for(var elem in matches) {  
      matches[elem].style.color = "black";
      matches[elem].style.fontFamily = "Arial";
      matches[elem].style.backgroundColor ="white";
      //matches[elem].style.fontwidth ="Bold";
    }
    }
    catch{}
  }

  function cambiarParrafoFondoClaro(parrafo) {
  try
  {
    // Selecting elements with class test
    var matches = document.getElementsByClassName(parrafo);

    for(var elem in matches) {  
      matches[elem].style.color = "black";
      matches[elem].style.fontFamily = "Arial";
      matches[elem].style.backgroundColor ="white";
      //matches[elem].style.fontwidth ="Bold";
    }
    }
    catch{}
  }

  function cambiarTextoFondoClaro(tipo) {
    try
    {
      // Selecting elements with class test
      var matches = document.getElementsByClassName(tipo);
      
      for(var elem in matches) {  
        matches[elem].style.color = "black";
        matches[elem].style.fontFamily = "Arial";        
      }
        }
        catch{}
    }
  

    function cambiarContenedorFondoClaro(contenedor) {
      var matches = document.getElementsByClassName(contenedor);
          
      // Highlighting each element's background through loop
      for(var elem in matches) {  
          matches[elem].style.background = "white";
      }
    }


function cambiarFondoAClaro() {
  //document.getElementsByClassName("ventanaFlotante").style.opacity="100%";
  document.getElementsByClassName("ventanaFlotante").className = "opClass";

  document.head.style.backgroundImage="none";
  document.body.style.backgroundImage="none";

  document.getElementById("cuerpo").style.fontFamily="arial";
  document.getElementById("cuerpo").style.color="black";
  document.getElementById("cuerpo").style.background="white";

  //document.getElementById("myImage").src = "none";
  cambiarParrafoFondoClaro("ParrafoBlanco");
  cambiarParrafoFondoClaro("ParrafoNegro");
  cambiarParrafoFondoClaro("ParrafoAmarillo");

  cambiarTarjetaFondoClaro("card-body");

  cambiarContenedorFondoClaro("ContenedorAnside");
  cambiarContenedorFondoClaro("ContenedorNav");

  cambiarTextoFondoClaro("Titulo"); 
  cambiarTextoFondoClaro("SubTitulo"); 
  cambiarTextoFondoClaro("CabeceraTitulo"); 
}

function welcome() {alert("Bienvenido ¿Estás dispuesto a ver el mejor sitio del mundo mundial?")}

function datosDeveloper() {alert("Datos:\n Pedro Gervassio. \n Mail: Pedro@Gervassio.com\n Celular (15) 123456789")}


function AmpliarImg(x) {
  x.style.height = "20%";
  x.style.width = "20%";
}

function NormalImg(x) {
  x.style.height = "5%";
  x.style.width = "5%";
}
