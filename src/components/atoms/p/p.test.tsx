import React from 'react';
import { render } from '@testing-library/react';
import P from '.';

describe('<P />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<P id={ sampleProp } />)
    const element = container.querySelector('p') as HTMLHeadingElement;
    expect(element.id).toBe(sampleProp);
  })
  
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<P>{ sampleTextContent }</P>)
    const element = container.querySelector('p') as HTMLHeadingElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
})
