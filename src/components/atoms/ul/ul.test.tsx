import React from 'react';
import Ul from '.';
import { render } from '@testing-library/react';

describe('<Ul />', () => {
  it('renders with text content', () => {
    const sample = 'sample';
    const { container } = render(<Ul>{ sample }</Ul>);
    const element = container.querySelector('ul') as HTMLUListElement;
    
    expect(element.textContent).toBe(sample);
  })
  it('renders prop properly', () => {
    const sampleProp = '1';
    const { container } = render(<Ul id={ sampleProp } />)
    const element = container.querySelector('ul') as HTMLUListElement;

    expect(element.id).toBe(sampleProp);
  })
})