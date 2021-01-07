import React from 'react';
import { render } from '@testing-library/react';
import Option from '.';

describe('<Option />', () => {
  it('renders text content', () => {
    const sampleText = 'sample'
    const { container } = render(<Option>{ sampleText }</Option>);
    const element = container.querySelector('option') as HTMLElement;
    expect(element.textContent).toBe(sampleText);
  });
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Option id={ sampleProp }></Option>);
    const element = container.querySelector('option') as HTMLElement;
    expect(element.id).toBe(sampleProp); 
  })
})