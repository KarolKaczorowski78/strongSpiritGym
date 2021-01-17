import React from 'react';
import { render } from '@testing-library/react';
import Label from '.';

describe('<Label />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Label id={ sampleProp }></Label>)
    const element = container.querySelector('label') as HTMLLabelElement;
    expect(element.id).toBe(sampleProp);
  });
  it('renders text content', () => {
    const sampleContent = 'sample';
    const { container } = render(<Label>{ sampleContent }</Label>)
    const element = container.querySelector('label') as HTMLLabelElement;
    expect(element.textContent).toBe(sampleContent);
  })
})