import React from 'react';
import { render } from '@testing-library/react';
import H1 from '.';

describe('<H1 />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<H1 id={ sampleProp } />)
    const element = container.querySelector('h1') as HTMLHeadingElement;
    expect(element.id).toBe(sampleProp);
  })
  
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<H1>{ sampleTextContent }</H1>)
    const element = container.querySelector('h1') as HTMLHeadingElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
})