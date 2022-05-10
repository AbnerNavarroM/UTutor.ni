import React from 'react';
import './Body.css';
import UtutorImage from '../../../helpers/images/ututor-ni2.png';
import LinkButton from '../../../helpers/components/LinkButton/LinkButton';
import InfiniteSwiperLoop from '../../../helpers/components/Swiper/InfiniteSwiperLoop';
import { images as ImagesLandPage4FirstCarousel } from '../../../helpers/images/lists/LandPageFirstCarouselImages';
import Productx2Card from '../../../helpers/components/Cards/Productx2Card';
import Productx1Card from '../../../helpers/components/Cards/Productx1Card';

export default function Body() {
  return (
    <div className='body container-fluid'>
      <div className="row firstRow">
        <div className="col-lg-4 offset-lg-1">
          <div className='Titulo1LPxInfo'>
            <img src={UtutorImage} alt="Ututor Logo" className='UtutorImg' />
            <h1>Pasa tu examen de admisión sin incovenientes</h1>
            <p>Servicio de tutoría de la mejor calidad para estudiantes decididos a entrar a la universidad.</p>
            <LinkButton description="Registrate Ya" hierarchy="success" outline={true} size="big" />
            <LinkButton description="Conoce Más" hierarchy="secondary" size="big" />
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1">
          {/* <img className="MainImageLP" src={MainLandingPage} alt="Main Image LandPage" /> */}
          <InfiniteSwiperLoop images={ImagesLandPage4FirstCarousel} />
        </div>
      </div>

      <div className="row WallPaper">
        <div className="container">
          <div className="row PlanesxProductos">
            <div className="col-lg-12 titulo">
              <h1>Conoce los planes de preparación que te ofrecemos.</h1>
            </div>
            <div className="col col-lg-3 offset-lg-1 ">
              <Productx2Card />
            </div>
            <div className="col col-lg-3">
              <Productx2Card />
            </div>
            <div className="col col-lg-3">
              <Productx2Card />
            </div>
            <div className="col col-lg-2">
              <Productx1Card />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  )
}
