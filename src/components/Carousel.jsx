import { useRef } from 'react';
import '../../public/style/Carousel.css'
import Retroceder from '../../public/assets/1111.png'
import Avanzar from '../../public/assets/2222.png'

function Carousel(car) {

    const reload = useRef()

    const IMAGENES = [
        car.image1,
        car.image2,
        car.image3
    ];
    window.onload = function() {
        // Variables
        
        const TIEMPO_INTERVALO_MILESIMAS_SEG = 2500;
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder');
        let $botonAvanzar = document.querySelector('#avanzar');
        let $imagen = document.querySelector('#imagen');
        let $botonPlay = document.querySelector('#play');
        let $botonStop = document.querySelector('#stop');
        let intervalo;

        // Funciones

        /**
         * Funcion que cambia la foto en la siguiente posicion
         */
        function pasarFoto() {
            if (posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }

        /**
         * Funcion que cambia la foto en la anterior posicion
         */
        function retrocederFoto() {
            if (posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            renderizarImagen();
        }

        /**
         * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
         */
        function renderizarImagen() {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }

        /**
         * Activa el autoplay de la imagen
         */
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
            // Desactivamos los botones de control
            $botonAvanzar.setAttribute('disabled', true);
            $botonRetroceder.setAttribute('disabled', true);
            $botonPlay.setAttribute('disabled', true);
            $botonStop.removeAttribute('disabled');

        }

        /**
         * Para el autoplay de la imagen
         */
        function stopIntervalo() {
            clearInterval(intervalo);
            // Activamos los botones de control
            $botonAvanzar.removeAttribute('disabled');
            $botonRetroceder.removeAttribute('disabled');
            $botonPlay.removeAttribute('disabled');
            $botonStop.setAttribute('disabled', true);
        }

        // Eventos
        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
        $botonPlay.addEventListener('click', playIntervalo);
        $botonStop.addEventListener('click', stopIntervalo);
        // Iniciar
        renderizarImagen();
    }

    const reloadButton = () => {
        window.location.reload()
        reload.current.style.display = "none";

    }

  return (
    <>
        <div className="carousel">
            <button id="retroceder"> <img src= {Retroceder} height="30" width="30"/> </button>
            <div id="imagen"></div>
            <button id="avanzar"> <img src= {Avanzar} height="30" width="30"/></button>
        </div>
        <div className="controles">
            <button id="play">Play</button>
            <button id="stop" disabled>Stop</button>
        </div>
        <div className="controles">
            <a id="reload" onClick={reloadButton} ref={reload}>Ver imagenes</a>
        </div>
    </>
  )
}

export default Carousel