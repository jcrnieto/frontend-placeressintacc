import panCordero from '../../image/panCordero.jpeg'
import sandwichMiga from '../../image/sandwichMiga.jpeg'
import tortaChocolate from '../../image/tortaChocolate.jpeg'


const Carousel = () => {
    return(
      <div className='container mb-3 bg-fondo-carousel'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={panCordero} class="d-block w-100 object-fit-contain" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sandwichMiga} class="d-block w-100 object-fit-contain" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={tortaChocolate} class="d-block w-100 object-fit-contain" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Carousel