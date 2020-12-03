import React from 'react';
import { render } from '@testing-library/react';
import Img from '.';

describe('<Img />', () => {
  it('renders a prop', () => {
    const sampleProp = 'sample';
    const { container } = render(<Img id={ sampleProp } />)
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element.id).toBe(sampleProp);
  })  
})