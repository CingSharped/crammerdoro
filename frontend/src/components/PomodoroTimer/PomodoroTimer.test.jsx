import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react'; 

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import PomodoroTimer from '.';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('PomodoroTimer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PomodoroTimer />
      </MemoryRouter>
    )
  });

  afterEach(cleanup);

  it('should render a open timer button', () => {
    const timerButton = screen.getByLabelText('Open timer');
    expect(timerButton).toBeInTheDocument();
  });

  it('should show the popup form when the timer button is clicked and show a number input and a start button', async () => {
    const timerButton = screen.getByRole('button',{ name: 'Open timer' } );  
    await userEvent.click(timerButton);

    const popupForm = screen.getByRole('button', {name: 'start button'});
    expect(popupForm).toBeInTheDocument();
    await userEvent.click(timerButton);

    const startButton = screen.getByRole('spinbutton', {type: 'number'});
    expect(popupForm).toBeInTheDocument();
  });
  
});