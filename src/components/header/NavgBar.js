import React from 'react';
import UtutorLogo from '../../helpers/images/ututor-ni2-no-bg.png';
import LinkButton from '../../helpers/components/LinkButton/LinkButton';
import './NavgBar.scss'

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
            <div className="container-fluid d-flex justify-content-center">
                <div className="col col-lg-2 headerLogoContainer">
                    <a className="navbar-brand" href="/"> <img src={UtutorLogo} width='125' height='50' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col col-lg-4 menuLinksContainer">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
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
                    </div>
                </div>
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
        </nav>
    )
}