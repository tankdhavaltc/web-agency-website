import React from 'react';
import "./Button.scss";

const Button = ({ type, text, onClick, variant = "primary" || "secondary", icon }) => {
    const getVariantClass = () => {
        switch (variant) {
            case 'primary':
                return "btn-primary";
            case 'secondary':
                return "btn-secondary";
            default:
                return "btn-primary";
        }
    }

    return (
        <button
            className={`btn ${getVariantClass()}`}
            type={type}
            onClick={onClick}
        >
            {text}
            <i className='bnt-icon'>{icon}</i>
        </button>
    )
}

export default Button