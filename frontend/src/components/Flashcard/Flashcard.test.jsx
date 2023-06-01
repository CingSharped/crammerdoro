import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react'; 

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import { MemoryRouter } from 'react-router-dom';

import userEvent from "@testing-library/user-event";
import Flashcard from '.';

describe('Flashcard', () => {
  const question = 'What is the capital of France?';
  const answer = 'Paris';

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Flashcard question={question} answer={answer}/>
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the question', () => {
    const questionElement = screen.getByText(`${question}`);
    
    expect(questionElement).toBeInTheDocument();
  });

  it('should render the question', () => {
    const questionElement = screen.getByText(`${question}`);
    
    expect(questionElement).toBeInTheDocument();
  });

  it('should toggle the isFlipped state when the card is clicked', async () => {

    const outercard = screen.getByTestId('flashcard');
    const card = screen.getByTestId('inner-flashcard');
    expect(card).toHaveClass('card-inner'); 
    await userEvent.click(outercard);
    expect(card).toHaveClass('card-inner flipped'); 
    await userEvent.click(outercard);
    await userEvent.click(outercard);
    expect(card).toHaveClass('card-inner flipped'); 
  });

});
