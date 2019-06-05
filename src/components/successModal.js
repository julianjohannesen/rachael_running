import React from 'react';
import PropTypes from 'prop-types';
import style from './contactForm.module.css'

class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        return (
            <div className={style.modal}>
                <div className={style.wrapper}>
                    <h2>
                        {this.props.children}
                    </h2>
                    <div className={style.modalFooter}>
                        <button 
                            className={style.btn + " " + style.btn1} 
                            onClick={this.props.onClose}
                            aria-label="Close modal."
                            title="Close modal."
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;