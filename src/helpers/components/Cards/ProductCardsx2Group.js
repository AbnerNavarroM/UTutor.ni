import React from 'react';
import Productx2Card from './Productx2Card';
import PropTypes from 'prop-types';

export default class ProductCardsx2Group extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return (
            <div className='container-fluid'>
                <div className="row">

                    {props.Productx2Cards !== null &&
                        props.Productx2Cards.map((pc, index) => {
                            return (
                                <div key={pc.cardProps.cardId}
                                    className={`col col-lg-${props.cols / props.Productx2Cards.length}`}
                                >
                                    <Productx2Card
                                        cardProps={pc.cardProps}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

ProductCardsx2Group.propTypes = {
    Productx2Cards: PropTypes.array.isRequired,
}
