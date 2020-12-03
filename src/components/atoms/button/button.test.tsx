import React from 'react';
import Button from '.';
import { render } from '@testing-library/react';

describe('<Button />', () => {
  it('renders with text content', () => {
    const sampleContent = 'sample content';
    const { container } = render(<Button>{ sampleContent }</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    
    expect(element.textContent).toBe(sampleContent);
  })
  
  it('handles events properly', () => {
    let num: number = 0;
  
    const { container } = render(<Button onClick={ () => { num++ } } />);
    const element = container.querySelector('button') as HTMLButtonElement;
  
    element.click();
  
    expect(num).toBe(1);
  })
})