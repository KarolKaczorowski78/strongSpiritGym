import React from 'react';
import { render } from '@testing-library/react';
import Select from '.';

describe('<Select />', () => {
  it('renders text content', () => {
    const sampleText = 'sample'
    const { container } = render(<Select>{ sampleText }</Select>);
    const element = container.querySelector('select') as HTMLElement;
    expect(element.textContent).toBe(sampleText);
  });
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Select id={ sampleProp }></Select>);
    const element = container.querySelector('select') as HTMLElement;
    expect(element.id).toBe(sampleProp); 
  })
})