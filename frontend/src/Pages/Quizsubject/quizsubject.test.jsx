import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { MemoryRouter, } from 'react-router-dom';

import QuizSubject from '../Quizsubject'

describe('QuizSubject', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/quizsubject/math']}>
          <QuizSubject />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Should display the first question', () => {
    const questionText = screen.getByText('Which is not a type of neuron?');
    expect(questionText).toBeInTheDocument();
  });

  it('Should update the score when selecting the correct answer', () => {
    const scoreSection = screen.getByText(/You scored/i);
    expect(scoreSection).not.toBeInTheDocument();

    const answerButton = screen.getByRole('button', { name: /Perceptual Neuron/i });
    expect(answerButton).toBeInTheDocument();

    // Select the correct answer
    userEvent.click(answerButton);

    const newScoreSection = screen.getByText(/You scored 1 out of/i);
    expect(newScoreSection).toBeInTheDocument();
  });

  it('Should display the next question when selecting an answer', () => {
    const questionText = screen.getByText('Which is not a type of neuron?');
    expect(questionText).toBeInTheDocument();

    const answerButton = screen.getByRole('button', { name: /Perceptual Neuron/i });
    expect(answerButton).toBeInTheDocument();

    // Select the correct answer
    userEvent.click(answerButton);

    const nextQuestionText = screen.getByText('The element involved in making human blood red is which of the following?');
    expect(nextQuestionText).toBeInTheDocument();
  });

  it('Should display the final score after answering all questions', () => {
    const questionText = screen.getByText('Which is not a type of neuron?');
    expect(questionText).toBeInTheDocument();

    const answerButtons = screen.getAllByRole('button');

    // Answer all questions
    answerButtons.forEach((button) => userEvent.click(button));

    const scoreSection = screen.getByText(/You scored/i);
    expect(scoreSection).toBeInTheDocument();
  });
});
