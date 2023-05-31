import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react'; 

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import NavBar from '.';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('NavBar', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  });

  it('Should have app name/logo link', () => {
    const appName = screen.getByRole('link', { name: /cramodoro/i});
    expect(appName).toBeInTheDocument();
  });

  it('Should have homelink', () => {
    const homeLink = screen.getByRole('link', { name: /home/i});
    expect(homeLink).toBeInTheDocument();
  });

  it('Should have dashboard link', () => {
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i});
    expect(dashboardLink).toBeInTheDocument();
  });

  it('Should have flashcard link', () => {
    const flashcardLink = screen.getByRole('link', { name: /flashcard/i});
    expect(flashcardLink).toBeInTheDocument();
  });

  it('Should have Quizzes link', () => {
    const quizLink = screen.getByRole('link', { name: /quiz/i});
    expect(quizLink).toBeInTheDocument();
  });
})


