import React, { Component } from 'react'
import imgLogoUTutor from '../../../helpers/images/ututor-ni2-no-bg.png';
import './SignUp.scss'
import LinkButton from '../../../helpers/components/LinkButton/LinkButton';


export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passrepeat: ''
    }
  }

  handleChange = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    // console.log(name);
    this.setState({
      [inputName]: inputValue,
    });
  }
  render() {

    console.log(this.state);
    return (
      <div className="container-fluid SignUpContainer">
        <div className="row">
          <div className="col col-lg-6 LogoContainer">
            <div className="row LogoUTutorRegistroXl v-h-center">
              <img src={imgLogoUTutor} alt="" />
            </div>
          </div>
          <div className="col col-lg-6 SignUpSideContainer">
            <div className="row">
              <div className="col col-lg-12 FormularioRegistroContainer v-h-center">
                <div className="col col-lg-12">
                  ¡Ututor.ni te da la bienvenida a la mejor plataforma de aprendizaje!
                </div>
                <form className="row FormularioRegistro">
                  <div className="col-lg-12 termyCond justLeft red">
                    <p>(*) Campos Requeridos</p>
                  </div>
                  <div className="col col-lg-6">
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Nombres<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="text" name='name' required onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Correo Electrónico<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="email" name='email' required onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Contraseña<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="password" name='password' required onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Número Telefónico<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="tel" id="phone" name="phone" placeholder="8123-4567" pattern="[0-9]{4}-[0-9]{4}" required />
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Apellidos<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="text" name='lastname' required onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Edad<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="number" name='edad' required onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <h6 className='justLeft'>Confirmar Contraseña<span>*</span></h6>
                      </div>
                      <div className="col">
                        <input type="password" name='passrepeat' required onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 offset-lg-2 LinkIniciarSesion">
                    <p>¿Ya posee una cuenta? <a href="/signin">Inicie Sesión</a></p>
                  </div>
                  <div className="col-lg-8 offset-lg-2">
                    <a type="submit" value="">
                      <LinkButton description="Continuar" hierarchy="info" size="big" color='#000' />
                    </a>
                  </div>
                  <div className="col-lg-12 termyCond">
                    <p>Al hacer click en continuar acepta los términos y condiciones de UTutor.ni</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}