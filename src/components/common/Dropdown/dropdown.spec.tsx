import { render } from '@testing-library/react'
import  Dropdown, { DropdownProps } from  './'


const setUp = (props: DropdownProps) => render(<Dropdown {...props}/>)



describe('Dropdown render', () => {
  it('default', () => {
    const props = { elements: [] }
    const tree = setUp(props)
    const { container } = tree
    const dropdown = container.querySelector('.dropdown')
    const dropdownList = container.querySelector('ul.dropdown__list')
    const dropdownElements = container.querySelectorAll('li.dropdown__element')
    
    expect(dropdown).toBeInTheDocument()
    expect(dropdownList).toBeInTheDocument()
    expect(dropdownElements.length).toBe(0)
  })

  it('with element text', () => {
    const props = { elements: [{ key: '1', value: 'some' }] }
    const tree = setUp(props)
    const { container } = tree
    const dropdownElements = container.querySelectorAll('li.dropdown__element')
    
    expect(dropdownElements.length).toBe(1)
    expect(dropdownElements[0].textContent).toBe('some')
  })

  it('with element component', () => {
    const TestComponent = () => <div className="test">Hello</div>
    const props = { elements: [{ key: '1', value: <TestComponent /> }] }
    const tree = setUp(props)
    const { container } = tree
    const dropdownElements = container.querySelectorAll('li.dropdown__element')
    const testElement = container.querySelector('.test')
     
    expect(dropdownElements.length).toBe(1)
    expect(testElement).toBeInTheDocument()
    expect(testElement?.textContent).toBe('Hello')
  })

  it('with classNames', () => {
    const props = { elements: [], classNames: 'autocomplete__dropdown' }
    const tree = setUp(props)
    const { container } = tree
    const autocompleteDropdown = container.querySelector('.autocomplete__dropdown')
    
    expect(autocompleteDropdown).toBeInTheDocument()
  })

  it('with active class', () => {
    const props = { elements: [{ key: '1', value: 'some', active: true }] }
    const tree = setUp(props)
    const { container } = tree
    const dropdownActiveElement = container.querySelector('li.dropdown__element--active')
    
    expect(dropdownActiveElement).toBeInTheDocument()
  })

  it('with more active class', () => {
    const props = { elements: [{ key: '1', value: 'some', active: true }, { key: '2', value: 'some', active: true }, { key: '3', value: 'some', active: true }] }
    const tree = setUp(props)
    const { container } = tree
    const dropdownActiveElements = container.querySelectorAll('li.dropdown__element--active')
    
    dropdownActiveElements.forEach(activeElement => expect(activeElement).toBeInTheDocument())
  })
})
