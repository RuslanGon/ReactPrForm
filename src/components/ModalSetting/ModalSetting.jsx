
import css from '../ModalSetting/ModalSetting.module.css';

const ModalSetting = ({ show, handleClose, children }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={`${css.modal} ${show ? css.show : ''}`} onClick={handleBackgroundClick}>
      <div className={css.modalContent}>
        <h2>Setting</h2>
        <span className={css.close} onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default ModalSetting;


