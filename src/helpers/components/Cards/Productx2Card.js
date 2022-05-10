import React from 'react';
import './Productx2Card.scss';
import MathCourseImage from '../../images/algebra.jpg';
import PsycoCourseImage from '../../images/psicometric.jpg';
import 'animate.css';

export default function Productx2Card() {
  return (
    <div className='CardLayout container-fluid'>
      <div className="row CardImages">
        <div
          className="col"
        >
          <div className="col p-3 CourseImg"
            style={{ backgroundImage: "url(" + MathCourseImage + ")" }}
          >
          </div>
        </div>
        <div
          className="col"
        >
          <div className="col p-3 CourseImg"
            style={{ backgroundImage: "url(" + PsycoCourseImage + ")" }}
          >
          </div>
        </div>
      </div>
      <div className="row CardInfo">
        <div className="col">
          <h5>Plan de Cursos Psicométrico - Matemáticas</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, natus tempora commodi alias at, debitis magnam odio dolorum molestias.</p>
        </div>
      </div>
      <div className="row FooterContainer">
      <div className="col col-lg-4">
          <div className="container-fluid FooterContent">
            <div className="row">
              <h3>100$</h3>
              <p>Inversión</p>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="container-fluid FooterContent">
            <div className="row">
              <h3>2 meses</h3>
              <p>Duración</p>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="container-fluid FooterContent">
            <div className="row">
              <h3>2</h3>
              <p>Enc / semana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
