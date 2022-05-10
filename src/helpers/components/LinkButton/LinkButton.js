import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LinkButton.css';

export default class LinkButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { size, disabled } = this.props;
    const { linkRef, outline, description, buttonName, hierarchy } = this.props;

    if (size === 'small') {
      size = 'btn-sm'
    } else if (size === 'big') {
      size = 'btn-lg'
    } else {
      disabled = true
    }

    return (
      <a
        className={`linkButton btn ${size} btn-${outline ? 'outline-' : ''}${hierarchy} ${disabled ? 'disabled' : ''}`}
        role="button"
        aria-disabled="true"
        id={buttonName}
        href ={linkRef}
      >
        {description}
      </a>
    )
  }
}

LinkButton.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  linkRef: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  description: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  hierarchy: PropTypes.string
}

LinkButton.defaultProps = {
  size: 'small',
  disabled: false,
  linkRef: '',
  outline: false,
  buttonName: 'button'
}