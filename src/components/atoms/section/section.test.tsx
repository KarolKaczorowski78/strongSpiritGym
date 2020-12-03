import React from 'react';
import { render } from '@testing-library/react';
import Section from '.';

describe('<Section />', () => {
  it('renders text content', () => {
    const sampleText = 'sample'
    const { container } = render(<Section>{ sampleText }</Section>);
    const element = container.querySelector('section') as HTMLElement;
    expect(element.textContent).toBe(sampleText);
  });
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Section id={ sampleProp }></Section>);
    const element = container.querySelector('section') as HTMLElement;
    expect(element.id).toBe(sampleProp); 
  })
})