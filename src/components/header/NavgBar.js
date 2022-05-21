import React from 'react';
import UtutorLogo from '../../helpers/images/ututor-ni2.png';
import LinkButton from '../../helpers/components/LinkButton/LinkButton';

export default function NavgBar() {
    const links = [
        {
            linkDescription: 'Inicio',
            linkName: '/',
            active: true
        },
        {
            linkDescription: 'Quiénes Somos',
            linkName: '/who-we-are'
        },
        {
            linkDescription: 'Contáctenos',
            linkName: '/contact'
        },
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light"
        >
            <div className="container-fluid"
                style={{ width: '90%', margin: '0 auto' }}
            >
                <div className="col col-lg-3"
                    style={{ width: '10%', margin: '0 auto' }}
                >
                    <a className="navbar-brand" href="/"> <img src={UtutorLogo} width='125' height='50' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col col-lg-5" id="navbarSupportedContent">
                    <ul className="navbar-nav"
                        style={{ width: 'auto', margin: '0 auto' }}
                    >

                        {
                            links.map(l => {
                                return (
                                    <li key={l.linkName} className="nav-item ">
                                        <a className={'nav-link ' + `${l.active && 'active'}`} aria-current="page" href={l.linkName}>{l.linkDescription}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <div className="col col-lg-4">
                        <div className="row">
                            <div className="col p-3">
                                <LinkButton
                                    size='big'
                                    disabled={false}
                                    hierarchy='success'
                                    // outline={true}
                                    description="Registrarse"
                                    id="signUpButton"
                                    linkRef="/signup"
                                    width={100}
                                />
                            </div>

                            <div className="col p-3">
                                <LinkButton
                                    size='big'
                                    disabled={false}
                                    hierarchy='secondary'
                                    // outline={true}
                                    description="Iniciar Sesión"
                                    id="logInButton"
                                    linkRef="/signin"
                                    width={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}