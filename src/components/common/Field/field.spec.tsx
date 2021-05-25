import { fireEvent, render, RenderResult } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Field, { FieldProps } from './'

const setUp = (props: FieldProps) => render(<Field { ...props }/>)


describe('Field render', () => {
  beforeEach(() => {
    
  })

  it('default render', () => {
    const props = { }
    const tree = setUp(props)
    const { container } = tree
    const field = container.querySelector('.field')
    const input = container.querySelectorAll('input')
    
    expect(field).toBeInTheDocument()
    expect(input[0]).toBeInTheDocument()
    expect(input.length).toBe(1)
    
  })

  it('render with classNames', () => {
    const props = { classNames: 'autocomplete__field' }
    const tree = setUp(props)
    const { container } = tree
    const autocompleteField = container.querySelector('.autocomplete__field')
    
    expect(autocompleteField).toBeInTheDocument()
  })
})



describe('Field input', () => {
  it('should contains input attr', () => {
    const props = { name: 'test-name' }
    const tree = setUp(props)
    const { container } = tree
    const input = container.querySelector('[name="test-name"]')

    expect(input).toBeInTheDocument()
  })


  it('should contains onChangeHandler', () => {
    const props = { onChange: jest.fn()  }
    const tree = setUp(props)
    const { container } = tree
    const input = container.querySelector('input')

    input && fireEvent.change(input, { target: { value: 'a' } })

    
    expect(props.onChange).toHaveBeenCalled()
    expect(input?.value).toBe('a')
  })
})
