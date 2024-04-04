import '../../public/style/About.css'
import aboutImage from '../../public/assets/about-img2.png'
function About() {
  return (
    <div className="row">

        <div className="image">
            <img src={aboutImage} alt=""/>
        </div>

        <div className="content">
            <h3>El Mejor Dealer Del País</h3>
            <p>Si quieres comprar un carro, una jeepeta, una camioneta, una minivan o un camión, has llegado al lugar correcto: VitiCars.com. Vehículos nuevos y usados en venta en toda República Dominicana.</p>
            <p>En VitiCars.com puedes comprar y vender de forma fácil y práctica vehículos de las marcas más reconocidas como son: Toyota, Honda, Ford, Hyundai, Nissan, Kia, Mitsubishi, Dodge, Lexus, Suzuki, etc.</p>
            <div className="icons-container">
                <div className="icons">
                    <a href="#"><span>Vende Tu Vehículo</span></a>
                </div>
                <div className="icons">
                    <a href="#"><span>Solicita Test Drive</span></a>
                </div>
                <div className="icons">
                    <a href="/carprice"><span>Solicita Cotización</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About