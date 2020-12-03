import React from 'react';
import Div from '.';
import { render } from '@testing-library/react';

describe('<Div />', () => {
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const { container } = render(<Div>{ sampleTextContent }</Div>)
    const element = container.querySelector('div') as HTMLDivElement;
    expect(element.textContent).toBe(sampleTextContent);
  })
  
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Div id={ sampleProp } />)
    const element = container.querySelector('div') as HTMLHeadingElement;
    expect(element.id).toBe(sampleProp);
  })
})