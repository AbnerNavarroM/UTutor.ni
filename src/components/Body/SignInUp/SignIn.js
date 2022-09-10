import React, { Component } from 'react';
import imgLogoUTutor from '../../../helpers/images/ututor-ni2-no-bg.png';
import './SignIn.scss'
import LinkButton from '../../../helpers/components/LinkButton/LinkButton';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    return (
      <div className='container-fluid SignInContainer'>
        <div className="row">
          <div className="col col-lg-12">
            <div className="SignInWallPaper">
              <div className="row">
                <div className="col col-lg-10 offset-1">
                  <div className="row">
                    <div className="col col-lg-4 offset-lg-4 FormularioInicioSesionContainer">
                      <div className="row LogoUTutorSesion">
                        <img src={imgLogoUTutor} alt="" />
                      </div>
                      <div className="row">
                        <h4>Iniciar sesión</h4>
                      </div>
                      <form action="" className="row FormularioSesion">
                        <div className="col col-lg-12">
                          <div className="col">
                            <div className="col">
                              <h6 className='justLeft'>Correo Electrónico</h6>
                            </div>
                            <div className="col">
                              <input type="email" name='email' required onChange={this.handleChange} />
                            </div>
                          </div>
                          <div className="col">
                            <div className="col">
                              <h6 className='justLeft'>Contraseña</h6>
                            </div>
                            <div className="col">
                              <input type="password" name='password' required onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-10 d-flex justify-content-center recordarInputContainer">
                          <div className="p-3 recordarInput">
                            <input type="checkbox" name="rememberPass" />
                          </div>
                          <div className="p-3">
                            <p>Recordarme</p>
                          </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                          <LinkButton description="Iniciar Sesión" hierarchy="success" size="big" />
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                          <p>¿Aún no posee una cuenta? <a href="/signin">Regístrese</a></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};