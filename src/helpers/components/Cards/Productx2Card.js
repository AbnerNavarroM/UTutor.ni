import React from 'react';
import './Productx2Card.scss';
import 'animate.css';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton/LinkButton';

export default class Productx2Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      animationLOCAL: {
        // Building Animation Classes
        animationClass: `animate__animated animate__${props.cardProps.animation.classes} `,
        animationDelay: `animate__delay-${props.cardProps.animation.delay}s`
      }
    }
  }

  componentDidMount = () => {
    const {cardProps} = this.props;
    cardProps.animation &&
      setTimeout(() => { //SetTimeOut due to duration on Card animations classes using Animate.css. They must be deleted once animation finished
        //in order to run our own animations.
        this.setState({
          animationLOCAL: { animationClass: '', animationDelay: '' }
        })
      }, (cardProps.animation.delay * 1000)+1000);
  }


  render() {
    const {cardProps} = this.props;
    const { img1, img2, cost, term, encountersxWeek, TituloProducto } = cardProps;
    const img1Src = img1.imgSrc;
    const img2Src = img2.imgSrc;

    return (
      <div
        className={cardProps.enableAnimation ? 'container-fluid CardLayout ' + this.state.animationLOCAL.animationClass + ' ' + this.state.animationLOCAL.animationDelay : ' container-fluid CardLayout'}
      // If card is going to have an animation please attach it to the card Animate classes with the animationLocal variable.
      >
        <div className="row CardImages">
          <div
            className="col"
          >
            <div className="col p-3 CourseImg"
              style={{ backgroundImage: "url(" + img1Src + ")" }}
            >
            </div>
          </div>
          <div
            className="col"
          >
            <div className="col p-3 CourseImg"
              style={{ backgroundImage: "url(" + img2Src + ")" }}
            >
            </div>
          </div>
        </div>
        <div className="row CardInfo">
          <div className="col">
            <div className="row">
              <h5>{TituloProducto}</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, natus tempora commodi alias at, debitis magnam odio dolorum molestias.</p>
            </div>
            <div className="row">
              <div className="col">
                <LinkButton
                  size="big"
                  description='Adquirir'
                  hierarchy='info'
                  width={60}
                  attachedClasses="ButtonComprarCursosLandPage"
                  color='white'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row FooterContainer">
          <div className="col col-lg-4">
            <div className="container-fluid FooterContent">
              <div className="row">
                <h3>{cost}$</h3>
                <p>Inversión</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="container-fluid FooterContent">
              <div className="row">
                <h3>{term} meses</h3>
                <p>Duración</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="container-fluid FooterContent">
              <div className="row">
                <h3>{encountersxWeek}</h3>
                <p>Enc / semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Productx2Card.propTypes = {
  cardProps : PropTypes.object.isRequired
}