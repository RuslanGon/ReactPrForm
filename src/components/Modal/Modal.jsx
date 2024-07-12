
import css from '../Modal/Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`${css.modal} ${show ? css.show : ''}`}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
