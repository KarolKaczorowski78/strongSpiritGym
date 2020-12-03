import React from 'react';
import { render } from '@testing-library/react';
import H2 from '.';

describe('<H2 />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<H2 id={ sampleProp } />)
    const element = container.querySelector('h2') as HTMLHeadingElement;
    expect(element.id).toBe(sampleProp);
  })
  
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<H2>{ sampleTextContent }</H2>)
    const element = container.querySelector('h2') as HTMLHeadingElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
})