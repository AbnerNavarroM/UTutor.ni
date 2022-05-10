import React from 'react';
import UtutorLogo from '../../helpers/images/ututor-ni2.png';
import LinkButton from '../../helpers/components/LinkButton/LinkButton';

export default function NavgBar() {
    const links = [
        {
            linkDescription: 'Inicio',
            linkName: 'home',
            active: true
        },
        {
            linkDescription: 'Quiénes Somos',
            linkName: 'who-we-are'
        },
        {
            linkDescription: 'Contáctenos',
            linkName: 'contact'
        },
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home"> <img src={UtutorLogo} width='125' height='50' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {
                            links.map(l => {
                                return (
                                    <li key={l.linkName} className="nav-item">
                                        <a className={'nav-link ' + `${l.active && 'active'}`} aria-current="page" href={'/' + l.linkName}>{l.linkDescription}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>

                        <LinkButton
                            size='big'
                            disabled={false}
                            hierarchy='success'
                            // outline={true}
                            description="Registrarse"
                            id="signUpButton"
                            linkRef="/sign-up"
                        />

                        <LinkButton
                            size='big'
                            disabled={false}
                            hierarchy='secondary'
                            // outline={true}
                            description="Iniciar Sesión"
                            id="logInButton"
                            linkRef="/log-in"
                        />
                </div>
            </div>
        </nav>
    )
}