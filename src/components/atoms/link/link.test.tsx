import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Link from '.';
import { render } from '@testing-library/react';

describe('<Link />', () => {
  it('renders a prop', () => {
    const sampleProp = '/test';
    const { container } = render(
    <TestComponent>
      <Link to={ sampleProp } id={ sampleProp } />
    </TestComponent>)
  
    const element = container.querySelector('a') as HTMLAnchorElement;
  
    expect(element.id).toBe(sampleProp);
  })
  
  it('renders text content', () => {
    const sampleTextContent = 'sample';
    const sampleProp = '/test';
    const { container } = render(
      <TestComponent>
        <Link to={ sampleProp }>{ sampleTextContent }</Link>
      </TestComponent>)
  
    const element = container.querySelector('a') as HTMLAnchorElement;
  
    expect(element.textContent).toBe(sampleTextContent);
  })
  
  it('redirects properly', () => {
    const testPath = '/test';
    const { container } = render(
      <TestComponent>
        <Link to={ testPath } />
      </TestComponent>)
  
      const element = container.querySelector('a') as HTMLAnchorElement;
  
      element.click();
      
      expect(window.location.pathname).toBe(testPath);
  })
})

function TestComponent(props: { children: ReactNode }) {
  return (
    <Router>
      { props.children }
      <Route path="/" component={ () => { return <p></p> } } />
      <Route path="/test" component={ () => { return <p></p> } } />
    </Router>
  )
}