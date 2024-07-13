import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import BoxForm from './components/BoxForm/BoxForm';
import Counter from './components/Counter/Counter';
import Calendar from './components/Calendar/Calendar';
import Modal from './components/Modal/Modal';
import css from '../src/components/Modal/Modal.module.css';
import ModalSetting from './components/ModalSetting/ModalSetting';

import foto from '../src/image/foto.png';
import upload from '../src/image/upload.png';
import Form from './components/Form/Form';

function App() {
  const [users, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);

  const addUsers = (formData) => {
    const finalUsers = {
      ...formData,
      id: nanoid()
    };
    setUser((prevState) => [...prevState, finalUsers]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenSettingModal = () => {
    setShowSettingModal(true);
  };

  const handleCloseSettingModal = () => {
    setShowSettingModal(false);
  };

  return (
    <>
      <BoxForm />
      <Counter />
      <Calendar handleOpenSettingModal={handleOpenSettingModal} /> 
      <button onClick={handleOpenModal}>Открыть модальное окно</button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2 className={css.title}>Delete entry</h2>
        <p className={css.text}>Are you sure you want to delete the entry?</p>
        <button className={css.button1} onClick={handleCloseModal}>
          Delete
        </button>
        <button className={css.button2} onClick={handleCloseModal}>
          Cancel
        </button>
      </Modal>
      <ModalSetting
        show={showSettingModal}
        handleClose={handleCloseSettingModal}
      >
        <h2>Setting</h2>
        <img className={css.foto} src={foto} alt="" />
        <div className={css.divfoto}>
          <a href=""> <img src={upload} alt="" /></a>
          <a className={css.settext} href="">Upload a photo</a>
        </div>
        <h4 className={css.settitle}>Your gender identity</h4>
        <Form />
      </ModalSetting>
    </>
  );
}

export default App;
