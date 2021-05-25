import { render, screen, RenderResult } from '@testing-library/react'
import Autocomplete, { AutocompleteProps }  from './'

const setUp = (props: AutocompleteProps) => render(<Autocomplete {...props} />)

describe('Autcomplete render', () => {
   let props  
   let tree: RenderResult

   beforeEach(() => {
     props = { }
     tree = setUp(props)
    })

  it('default render', () => {
    const { container } = tree
    const autocomplete = container.querySelector('.autocomplete') 
    const autocompleteField = container.querySelector('.autocomplete__field') 
    const autocompleteDropdown = container.querySelector('.autocomplete__dropdown') 
    const input = container.querySelector('input')


    expect(autocomplete).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(autocompleteField).toBeInTheDocument()
    expect(autocompleteDropdown).toBeInTheDocument()

  })


})
