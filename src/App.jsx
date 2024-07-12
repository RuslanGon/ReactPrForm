
import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import BoxForm from './components/BoxForm/BoxForm';
import Counter from './components/Counter/Counter';
import Calendar from './components/Calendar/Calendar';
import Modal from './components/Modal/Modal';

function App() {
  const [users, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <BoxForm />
      <Counter />
      <Calendar />
      <button onClick={handleOpenModal}>Открыть модальное окно</button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Это модальное окно</h2>
        <p>Здесь можно разместить любое содержимое.</p>
      </Modal>
    </>
  );
}

export default App;
