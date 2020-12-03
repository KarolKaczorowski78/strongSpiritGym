import React from 'react';
import { render } from '@testing-library/react';
import Li from '.';

describe('<Li />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Li id={ sampleProp } />)
    const element = container.querySelector('li') as HTMLLIElement;
    expect(element.id).toBe(sampleProp);
  });
  it('renders text content', () => {
    const sampleContent = 'sample';
    const { container } = render(<Li>{ sampleContent }</Li>)
    const element = container.querySelector('li') as HTMLLIElement;
    expect(element.textContent).toBe(sampleContent);
  })
})