import React from 'react';
import { render } from '@testing-library/react';
import Input from '.';

describe('<Input />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Input id={ sampleProp } />)
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element.id).toBe(sampleProp);
  });
})