
import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import BoxForm from './components/BoxForm/BoxForm';
import Counter from './components/Counter/Counter';
import Calendar from './components/Calendar/Calendar';
import Modal from './components/Modal/Modal';
import css from '../src/components/Modal/Modal.module.css';
import ModalSetting from './components/ModalSetting/ModalSetting';

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
      <Calendar />
      <button onClick={handleOpenModal}>Открыть модальное окно</button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2 className={css.title}>Delete entry</h2>
        <p className={css.text}>Are you sure you want to delete the entry?</p>
        <button className={css.button1} onClick={handleCloseModal}>Delete</button>
        <button className={css.button2} onClick={handleCloseModal}>Cancel</button>
      </Modal>
      <button onClick={handleOpenSettingModal}>Открыть настройки</button>
      <ModalSetting show={showSettingModal} handleClose={handleCloseSettingModal}>
       
      </ModalSetting>
    </>
  );
}

export default App;
