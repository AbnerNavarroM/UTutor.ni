import React, { Component } from 'react'
import './Index.css';
import UtutorImage from '../../../helpers/images/ututor-ni2.png';
import LinkButton from '../../../helpers/components/LinkButton/LinkButton';
import InfiniteSwiperLoop from '../../../helpers/components/Swiper/InfiniteSwiperLoop';
import { MarketingImages as FirstMarketingCarousel4LandPageImages } from '../../../helpers/images/lists/LandPageFirstCarouselMarketingImages';
import { images as CardsCourses } from '../../../helpers/images/lists/CoursesOffersList';
import ProductCardsx2Group from '../../../helpers/components/Cards/ProductCardsx2Group';
import Productx1Card from '../../../helpers/components/Cards/Productx1Card';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          cardProps: {
            enableAnimation: true,
            animation: {
              classes: 'backInDown',
              delay: 0.5 //measure in seconds
            },
            img1: CardsCourses.MathCourses.MathCourseImg1,
            img2: CardsCourses.PsycoCourses.PsycoCourseImg1,
            TituloProducto: "Plan de Cursos Psicométrico - Matemáticas1",
            cardId: 'Card1',
            encountersxWeek: 4,
            term: 5,  //in months
            cost: 100  //in dollars  
          }
        },

        {
          cardProps: {
            enableAnimation: true,
            animation: {
              classes: 'backInUp',
              delay: 0.5 //measure in seconds
            },
            img1: CardsCourses.MathCourses.MathCourseImg1,
            img2: CardsCourses.PsycoCourses.PsycoCourseImg1,
            TituloProducto: "Plan de Cursos Psicométrico - Matemáticas2",
            cardId: 'Card2',
            encountersxWeek: 3,
            term: 4,  //in months
            cost: 100  //in dollars
          }
        },

        {
          cardProps: {
            enableAnimation: true,
            animation: {
              classes: 'backInDown',
              delay: 0.5 //measure in seconds
            },
            img1: CardsCourses.MathCourses.MathCourseImg1,
            img2: CardsCourses.PsycoCourses.PsycoCourseImg1,
            TituloProducto: "Plan de Cursos Psicométrico - Matemáticas3",
            cardId: 'Card3',
            encountersxWeek: 4,
            term: 3, //in months
            cost: 100, //in dollars
          }
        }
      ]
    }
  }

  onScrollChange = () => {
    // const { scrollYProgress } = windouseViewportScroll()
    // console.log(scrollYProgress);
  }

  render() {
    return (
      <div className='body container-fluid' onScroll={this.onScrollChange}>
        <div className="row">
          <h1 id='scroll_position'>Nuevo Row</h1>
        </div>

        <div className="row firstRow">
          <div className="col-lg-4 offset-lg-1">
            <div className='Titulo1LPxInfo'>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img src={UtutorImage} alt="Ututor Logo" className='UtutorImg' />
                    <h1>Pasa tu examen de admisión sin incovenientes</h1>
                    <p>Servicio de tutoría de la mejor calidad para estudiantes decididos a entrar a la universidad.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col ">
                    <div className="col-p3">
                      <LinkButton
                        description="Registrate Ya"
                        hierarchy="success"
                        outline
                        size="big"
                        width={100}
                      />
                    </div>
                  </div>
                  <div className="col ">
                    <div className="col-p3">
                      <LinkButton
                        description="Conoce Más"
                        hierarchy="secondary"
                        size="big"
                        width={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            {/* <img className="MainImageLP" src={MainLandingPage} alt="Main Image LandPage" /> */}
            <InfiniteSwiperLoop images={FirstMarketingCarousel4LandPageImages} />
          </div>
        </div>

        <div className="row WallPaper">
          <div className="container">
            <div className="row PlanesxProductos">
              <div className="col-lg-12 titulo">
                <h1>Conoce los planes de preparación que te ofrecemos.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-9 offset-lg-1">
                <ProductCardsx2Group
                  Productx2Cards={this.state.cards}
                  cols={12}
                />
              </div>
              <div className="col col-lg-2">
                <Productx1Card
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}