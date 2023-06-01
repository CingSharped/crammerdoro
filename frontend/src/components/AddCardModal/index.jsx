import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

import { useAuth } from '../../context';
import './addCardModal.css'

function AddCardModal({setFlashcards}) {
  const [show, setShow] = useState(false);
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Maths');
  const { user } = useAuth()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleQuestionChange = (e) => {
    setQuestionValue(e.target.value);
  };
  const handleAnswerChange = (e) => {
    setAnswerValue(e.target.value)
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleAddCard = async (e) => {
    e.preventDefault();

    const requestData = {
      subject: selectedSubject,
      question: questionValue,
      answer: answerValue,
      createdBy: user._id
    };
  
    try {
      const response = await axios.post('https://crammerdoro-backend.onrender.com/flashcards', requestData);
  
      if (response.status === 201) {
        const newFlashcard = response.data; 
        setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
        alert('created') 
      } else {
        alert('something is wrong') 
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
};

  return (
    <>
      <div className='flashcard' onClick={handleShow}>
        Add
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='addCardForm' onSubmit={handleAddCard}>
            <select aria-label='subject selection' value={selectedSubject} onChange={handleSubjectChange}>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
            <input value={questionValue} onChange={handleQuestionChange} type="text" placeholder='Question' aria-label='question textbox'/>
            <input value={answerValue} onChange={handleAnswerChange} type="text" placeholder='Answer' aria-label='answer textbox'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button form='addCardForm'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCardModal;