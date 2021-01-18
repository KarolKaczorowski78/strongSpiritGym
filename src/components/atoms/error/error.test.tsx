import React from 'react';
import ErrorMessage from '.';
import { render } from '@testing-library/react';

describe('<ErrorMessage />', () => {
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<ErrorMessage>{ sampleTextContent }</ErrorMessage>)
    const element = container.querySelector('span') as HTMLSpanElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
  
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<ErrorMessage id={ sampleProp } />)
    const element = container.querySelector('span') as HTMLSpanElement;
    expect(element.id).toBe(sampleProp);
  })
})