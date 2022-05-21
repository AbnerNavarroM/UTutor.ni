import React from 'react';
import './Productx2Card.scss';
import MoreCoursesInfo from '../../images/MoreCoursesInfo.jpg';
import FlechaContinuar from '../../images/arrow-right.png';

export default function Productx1Card() {
    return (
        <div className='CardLayout MoreCourses container-fluid animate__animated animate__shakeX animate__slower animate__infinite '>
            <div className="row CardImages">
                <div className="col CourseImg"
                    style={{ backgroundImage: "url(" + MoreCoursesInfo + ")" }}
                >
                </div>
            </div>
            <div className="row CardInfo">
                <div className="col">
                    <h3>Descubre Más Cursos</h3>
                    {/* <LinkButton size="big" hierarchy="success" description="Buscar" outline/> */}
                    <div className="FlechaContinuar">
                        <img src={FlechaContinuar} alt="Continuar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

