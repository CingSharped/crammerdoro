import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faPlus } from '@fortawesome/free-solid-svg-icons'


import axios from 'axios';

import BootstrapAlert from '../BootstrapAlert'
import { useAuth, useFlashcard } from '../../context';
import './addCardModal.css'

function AddCardModal() {
  const [show, setShow] = useState(false);
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Maths');
  const { user } = useAuth()
  const { setFlashcards } = useFlashcard()
  const [alert, setAlert] = useState(false);

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
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 3000);
        const newFlashcard = response.data;
        setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
        setAnswerValue('')
        setQuestionValue('')
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
      <FontAwesomeIcon icon={faPlus} size="2xl" style={{backgroundColor: 'white', borderRadius: '100%', padding: '1.5rem'}}/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a card</Modal.Title>
        </Modal.Header>
        {alert === true && <BootstrapAlert heading={'Added successfully!'} warning={'Nice Job :)'}/>}
        <Modal.Body>
          <form id='addCardForm' onSubmit={handleAddCard}>
            <select aria-label='subject selection' value={selectedSubject} onChange={handleSubjectChange}>
              <option value="" disabled selected>Pick your subject</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
              <option value="Science">Science</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Other">Other</option>
            </select>
            <textarea value={questionValue} onChange={handleQuestionChange} placeholder='Question' aria-label='question textbox' id='question-textbox' />
            <textarea value={answerValue} onChange={handleAnswerChange} placeholder='Answer' aria-label='answer textbox' id='answer-textbox'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='__btn secondary-btn' onClick={handleClose}>
            Close
          </button>
          <button form='addCardForm' className='__btn primary-btn'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCardModal;