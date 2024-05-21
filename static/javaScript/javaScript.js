
document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementsByClassName("boton_empieza")[0];
    
    
    scrollButton.addEventListener("click", function () {
        var pixelsPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        
        // Desplaza la página hacia abajo 2 rem (ajusta el valor según tus necesidades)
        var scrollAmountInRem = 37;
        var scrollAmountInPixels = scrollAmountInRem * pixelsPerRem;
        var currentScrollPosition = window.scrollY;
     
         var resultado= scrollAmountInPixels - currentScrollPosition 
         console.log(resultado)
    
        window.scrollBy(0, resultado);
    });

    var Texto= document.getElementById("textoCreadoPorti")
    var TextoIa= document.getElementById("textoCreadoPorIa")
    

click_texto=0

    Texto.addEventListener("click", function(){
      
      
       
        if (click_texto==0){

       
        var pixelsPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        var scrollAmountInRem = 20;
        var scrollAmountInPixels = scrollAmountInRem * pixelsPerRem;
        
        window.scrollBy(0, scrollAmountInPixels);

        click_texto=1
         }



    })
    
    TextoIa.addEventListener("click", function(){
     
       
        if (click_texto==0){

       
            var pixelsPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize);
            var scrollAmountInRem = 25;
            var scrollAmountInPixels = scrollAmountInRem * pixelsPerRem;
            
            window.scrollBy(0, scrollAmountInPixels);
    
            click_texto=1
             }
    
    



    })





});

window.addEventListener("scroll", function () {
    var scrolledPixels = window.scrollY;
    
    // Muestra la cantidad de píxeles desplazados en la consola
 
});







// eleccion de personaje , tanto mujer como hombre

//eleccion personaje hombre



const hombre=document.getElementsByClassName('hombre')[0]
var mujer=document.getElementsByClassName("mujer")[0]
var clics_mujer=0
var clics_hombre=0;
function botonPlayClickMujer() {
    const videoMujer = document.getElementById("videoMujer");
    const videoHombre= document.getElementById("videoHombre");


    if (videoMujer.paused) {
        videoMujer.play();
    } else {
        videoMujer.pause();
    }

}

function botonPlayClickHombre() {

    const videoHombre= document.getElementById("videoHombre");


    if (videoHombre.paused) {
        videoHombre.play();
    } else {
        videoHombre.pause();
    }

}


hombre.addEventListener('click', function(){
      
    var video_ia_hombre=document.getElementById('video_ia_hombre')
    var video_ia_mujer=document.getElementById('video_ia_mujer');
    const botonEstilosPlayMujer=document.getElementById("botonPlayMujer")
    const botonEstilosPlayHombre=document.getElementById("botonPlayHombre")
    const botonPlayMujer = document.getElementById("botonPlayMujer");
    const botonPlayHombre = document.getElementById("botonPlayHombre");
    const videoMujer = document.getElementById("videoMujer");

    clics_hombre++
    
    
           if( clics_hombre==1){

            video_ia_hombre.classList.add("escalar_video_mujer")
            video_ia_mujer.classList.remove("escalar_video_mujer")
            botonEstilosPlayMujer.classList.remove("botonPlay")
            botonEstilosPlayHombre.classList.add("botonPlay")
            botonPlayMujer.removeEventListener("click", botonPlayClickMujer);
            botonPlayHombre.addEventListener("click", botonPlayClickHombre);
            clics_mujer=0
            /*parar video mujer*/
         videoMujer.pause()


           }else if( clics_hombre==2){
            video_ia_hombre.classList.remove("escalar_video_mujer")
            botonEstilosPlayHombre.classList.remove("botonPlay")
            botonPlayHombre.removeEventListener("click", botonPlayClickHombre);
          
             clics_hombre=0;


           }
    
console.log( clics_hombre)

});

//eleccion personaje mujer


mujer.addEventListener('click', function(){
    
    const botonPlayHombre = document.getElementById("botonPlayHombre");
    var video_ia_hombre=document.getElementById('video_ia_hombre')
    var video_ia_mujer=document.getElementById('video_ia_mujer');
    const botonEstilosPlay=document.getElementById("botonPlayMujer")
    const  botonPlayMujer = document.getElementById("botonPlayMujer");
    const botonEstilosPlayHombre=document.getElementById("botonPlayHombre")

    clics_mujer++


    if(clics_mujer==1){

            video_ia_mujer.classList.add("escalar_video_mujer")
            video_ia_hombre.classList.remove("escalar_video_mujer")
            botonEstilosPlay.classList.add("botonPlay")
            botonEstilosPlayHombre.classList.remove("botonPlay")
            clics_hombre=0
            botonPlayHombre.removeEventListener("click", botonPlayClickHombre);
            botonPlayMujer.addEventListener("click",  botonPlayClickMujer);
            videoHombre.pause()

           }else if(clics_mujer==2){

            video_ia_mujer.classList.remove("escalar_video_mujer")
            botonEstilosPlay.classList.remove("botonPlay")
            botonPlayMujer.removeEventListener("click",  botonPlayClickMujer);

            clics_mujer=0;


           }
    
/*poder darle play al video , dentro del evento "click"*/



});


/*primera funcion, primer h3 , hace aparecer el contenido de convert_historia y quita el contendio de convert_histotia_IA y tambien hace aparecer la frase "Historia vas a crear hoy? ¡La imaginación no tiene límites"  y quita otra frase */

var genero =""


function seleccionGeneroypruebaAudioMujer(generos){
    genero = generos
    document.querySelector('.generos').value = genero;
    document.querySelector('.generosIa').value = genero;

    console.log("hola" + genero)

}
function seleccionGeneroypruebaAudioHombre(generos){
    genero = generos
    document.querySelector('.generos').value = genero;
    document.querySelector('.generosIa').value = genero;
    console.log("hola" + genero)
  

}



const textoCreadoPorTi =() => {

    console.log("holaaa" + genero)
    if( genero ==="Mujer" || genero === "Hombre"){
let convert_historia=document.getElementById("convert_historia");
let  convert_historia_ia=document.getElementById("convert_historia_ia");
let frase_texto=document.getElementsByClassName("frase_texto") [0];
let frase_inicio=document.getElementsByClassName("frase_inicio") [0];
let frase_ia=document.getElementsByClassName("frase_ia") [0];
let  primerH3 = document.querySelector("#ia_original h3:first-child");
let segundoH3 = document.querySelector("#ia_original h3:nth-child(2)");





if( convert_historia.style.display== "none"){

convert_historia.style.display="block"
convert_historia_ia.style.display="none"
frase_texto.style.display="block"
frase_inicio.style.display= "none"
frase_ia.style.display= "none"
primerH3.style.transform=("scale(0.9)")
primerH3.style.webkitBoxShadow = "-3px 3px 0px 0px rgba(66, 68, 90, 1)";
primerH3.style.mozBoxShadow = "-3px 3px 0px 0px rgba(66, 68, 90, 1)";
primerH3.style.boxShadow = "-3px 3px 0px 0px rgba(66, 68, 90, 1)";


 /*cambio de estilos del segundo h3 de ia_original*/
segundoH3.style.transform=("scale(1)")
segundoH3.style.webkitBoxShadow = " -4px 3px 0px 3px rgb(7, 7, 7)";
segundoH3.style.mozBoxShadow = "  -4px 3px 0px 3px rgb(7, 7, 7)";
segundoH3.style.boxShadow =  " -4px 3px 0px 3px rgb(7, 7, 7)";

}



}else{
   /* alert("Primero elige personaje")*/
}
}

/*segunda funcion, SEGUNDO h3 ,hace aparecer el contenido de convert_historia_IA y quita el contenido de converti_historia y tambien hace aparecer la frase "IA desate su creatividad?..... " y quita otra frase*/

const  TextoCreadoPorIA=() => {

    if( genero ==="Mujer" || genero === "Hombre"){

    let convert_historia=document.getElementById("convert_historia");
    let  convert_historia_ia=document.getElementById("convert_historia_ia");
    let frase_texto=document.getElementsByClassName("frase_texto") [0];
    let frase_ia=document.getElementsByClassName("frase_ia") [0];
    let frase_inicio=document.getElementsByClassName("frase_inicio") [0];
    let  primerH3 = document.querySelector("#ia_original h3:first-child");
    let segundoH3 = document.querySelector("#ia_original h3:nth-child(2)");

    
    
    if( convert_historia_ia.style.display== "none"){
    
        convert_historia_ia.style.display="block"
        convert_historia.style.display="none"
        frase_ia.style.display="block"
         frase_inicio.style.display= "none"
         frase_texto.style.display="none"
         segundoH3.style.transform=("scale(0.9)")
         segundoH3.style.webkitBoxShadow = "3px 3px 0px 0px rgba(66, 68, 90, 1)";
         segundoH3.style.mozBoxShadow = "3px 3px 0px 0px rgba(66, 68, 90, 1)";
         segundoH3.style.boxShadow = "3px 3px 0px 0px rgba(66, 68, 90, 1)";

         /*cambio de estilos del primer h3 de ia_original*/
         primerH3.style.transform=("scale(1)")
         primerH3.style.webkitBoxShadow = " -4px 3px 0px 3px rgb(7, 7, 7)";
        primerH3.style.mozBoxShadow = " -4px 3px 0px 3px rgb(7, 7, 7)";
         primerH3.style.boxShadow = "  -4px 3px 0px 3px rgb(7, 7, 7)";


    
    }
    
    
}else{
    alert("Primero elige personaje")
}
    }

           /*hasta aqui las funciones de los botones de ia_original*/
       
//ondas de sonido

// se crea una instancia de wavesurfer, que e suna biblioteca apra crea audios con ondas de sonido



var play_descarga=document.getElementById("play_descarga")

var wavesurfer = WaveSurfer.create({
    container: '.ondas_sonido',
    waveColor: 'rgb(60, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    minPxPerSec: 100,
    barHeight:1.3,
    height:80  
  });

   
    play_descarga.addEventListener('click', function(){

       
        if (wavesurfer.isPlaying()) {
            console.log('Pausando...');
            wavesurfer.pause();
            play_descarga.classList.add("fa-play");
            play_descarga.classList.remove("fa-pause");

          } else {
            console.log('Reproduciendo...');
            wavesurfer.play();
            play_descarga.classList.add("fa-pause");
            play_descarga.classList.remove("fa-play");
          }
    
    
    })


    var play_descarga_ia=document.getElementById("play_descarga_ia")
    var wavesurfer_ia = WaveSurfer.create({
        container: '.ondas_sonido_ia',
        waveColor: 'rgb(60, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        minPxPerSec: 100,
        barHeight:1.3,
        height:80
      });
      
    play_descarga_ia.addEventListener('click', function(){

       
        if (wavesurfer_ia.isPlaying()) {
            console.log('Pausando...');
            wavesurfer_ia.pause();
            play_descarga_ia.classList.add("fa-play");
            play_descarga_ia.classList.remove("fa-pause");

          } else {
            console.log('Reproduciendo...');
            wavesurfer_ia.play();
            play_descarga_ia.classList.add("fa-pause");
            play_descarga_ia.classList.remove("fa-play");
          }
    
    
    })

  







                               /////* codigo servidor*/////


           $(document).ready(function () {
            $('#formulario_convert_historia').submit(function (e) {
                e.preventDefault(); // Evitar la recarga de la página
    
                // Realiza una solicitud AJAX para enviar los datos del formulario
                $.ajax({
                    type: 'POST', 
                    url: '/',
                    crossDomain: true,
                    data: $('#formulario_convert_historia').serialize(),
               
                    success: function (response) {
                        // Haz algo con la respuesta si es necesario
                        console.log('Formulario enviado con éxito1');
                        console.log(response)
                     

                        var generoSeleccionado = genero;
                        console.log("mirando " + genero)
                        if((generoSeleccionado == "Mujer" || generoSeleccionado == "Hombre")){
                        $('.descarga').attr('href' , response.audio);
                        $('#sound_download').show();
                    
                        var  audio_enlace= response.audio
                      

                            if (audio_enlace) {
                            wavesurfer.load(audio_enlace);
                        
                                } else {
                                console.error("La URL del audio es undefined. Verifica la respuesta del servidor.");
                                }
                     
                    
                        }
                                         
                    },
                    error: function (error) {
                        // Maneja los errores si es necesario
                        console.error('Error al enviar el formulario:', error);
                    }
                });
            
            });

            

            $('#formulario_Prompt_Historia').submit(function (e) {
                e.preventDefault(); // Evitar la recarga de la página
    
                // Realizar una solicitud AJAX para enviar los datos del formulario
                $.ajax({
                    type: 'GET', 
                    url: '/formularioIA', 
                    crossDomain: true,
                    data: $('#formulario_Prompt_Historia').serialize(),
                    success: function (response) {
                        // Haz algo con la respuesta si es necesario
                        console.log('Formulario enviado con éxito');
                      $(".historia_ia").text(response.mensaje_ia)

                                         
                    },
                    error: function (error) {
                        // Maneja los errores si es necesario
                        console.error('Error al enviar el formulario creador de la historia:', error);
                    }
                });
            
            });

            
            $('#formulario_convert_historia_ia').submit(function (e) {
                e.preventDefault(); // Evitar la recarga de la página
    
                // Realizar una solicitud AJAX para enviar los datos del formulario
                $.ajax({
                    type: 'POST', 
                    url: '/formularioIA', 
                    crossDomain: true,
                    data: $('#formulario_convert_historia_ia').serialize(),
                    success: function (response) {
                        // Haz algo con la respuesta si es necesario
                        console.log('Formulario enviado con éxito');

                        var generoSeleccionado = genero;
                        console.log("probando " + generoSeleccionado)
                        if((generoSeleccionado == "Mujer" || generoSeleccionado == "Hombre")){
                        $('.descargar_ia').attr('href' , response.audio_ia);
                        $('#sound_download_ia').show();
                            
                        var  audio_enlace_ia= response.audio_ia
                        console.log(audio_enlace_ia)
                        console.log("no ha entrado")

                        wavesurfer_ia.load(audio_enlace_ia)
                      


                        }


                     

                                         
                    },
                    error: function (error) {
                        // Maneja los errores si es necesario
                        console.error('Error al enviar el formulario ia:', error);
                    }
                });
            
            });



        });

     

