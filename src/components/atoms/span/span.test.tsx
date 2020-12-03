import React from 'react';
import { render } from '@testing-library/react';
import Span from '.';

describe('<Span />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Span id={ sampleProp } />)
    const element = container.querySelector('span') as HTMLHeadingElement;
    expect(element.id).toBe(sampleProp);
  })
  
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<Span>{ sampleTextContent }</Span>)
    const element = container.querySelector('span') as HTMLHeadingElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
})
