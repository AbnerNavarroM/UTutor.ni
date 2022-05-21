import React, { Component } from 'react'
import imgLogoUTutor from '../../../helpers/images/ututor-ni2-no-bg.png';
import './SignUp.scss'
import LinkButton from '../../../helpers/components/LinkButton/LinkButton';


export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
      lastname : '',
      email : '',
      password : '',
      passrepeat: ''
    }
  }

  handleChange = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    // console.log(name);
    this.setState({
      [inputName] : inputValue,
    });
  }
  render() {

    console.log(this.state);
    return (
      <div className="container-fluid SignUpContainer">
      <div className="row">
        <div className="col col-lg-12">
          <div className="SignUpInWallPaper">
            <div className="row">
              <div className="col col-lg-10 offset-1">
                <div className="row">
                  <div className="col col-lg-4 offset-lg-4 FormularioRegistroContainer">
                    <div className="row LogoUTutorRegistro">
                      <img src={imgLogoUTutor} alt="" />
                      <h1>Registrarse</h1>
                    </div>
                    <form className="row FormularioRegistro">
                      <div className="col col-lg-12">
                        <input type="text" placeholder='Nombres.' name='name' required onChange={this.handleChange}/>
                        <input type="text" placeholder='Apellidos' name= 'lastname' required onChange={this.handleChange}/>
                        <input type="email" placeholder='Correo Electrónico' name='email'  required onChange={this.handleChange}/>
                        <input type="password" placeholder='Contraseña' name='password'  required onChange={this.handleChange}/>
                        <input type="password" placeholder='Confirmar Contraseña' name='passrepeat'  required onChange={this.handleChange}/>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                        <p>¿Ya posee una cuenta? <a href="">Inicie Sesión</a></p>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                        <LinkButton description="Continuar" hierarchy="success" size="big"/>
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
}