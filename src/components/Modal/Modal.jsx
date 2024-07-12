
import css from '../Modal/Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={`${css.modal} ${show ? css.show : ''}`} onClick={handleBackgroundClick}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

