import '../../public/style/Home.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
// import Novedad from '../components/Novedad'
import Novedades from '../components/Novedades'
import Populares from '../components/Populares'
import Marcas from '../components/Marcas'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
    <title>D` VitiCars | Home</title>
      <Nav/>
      <Banner/>
      <h3 className="sub-heading"><strong>Nuestras</strong></h3>
      <h3 className="heading"><strong>Novedades</strong></h3>
      <Novedades/>
      <div className="anuncios" id='anuncios'>
        <h3 className="sub-heading"><strong>Anuncios</strong></h3>
        <h3 className="heading"><strong>Populares</strong></h3>
        <div className="box-container">
          <Populares/>
        </div>
      </div>
      <h3 className="sub-heading"><strong>Nuestras</strong></h3>
      <h3 className="heading"><strong>Marcas Afiliadas</strong></h3>
     <Marcas className="marcas-container" />
     <h3 className="sub-heading"><strong>Sobre Nosotros</strong></h3>
      <h3 className="heading"><strong>¿POR QUÉ ELEGIRNOS?</strong></h3>
      <About/>
      <footer className='footer' id='footer'>
      <Footer id='contact'/>
      </footer>
      
    </>
  )
}

export default Home