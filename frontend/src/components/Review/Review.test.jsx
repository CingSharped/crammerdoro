import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Review from '.';

describe('Review', () => {
  beforeEach(() => {
    render(<Review />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the Review component', () => {
    const reviewComponent = screen.getByText('Review');
    expect(reviewComponent).toBeInTheDocument();
  });

  it('should render the review details', () => {
    const reviewHeading = screen.getAllByRole('heading', { level: 3 });
    expect(reviewHeading).toHaveLength(1);
  });
});
