import React from 'react'
import styles from './autocomplete.module.scss'

import { Field } from './../common'
import { Dropdown } from './../common'

export interface AutocompleteProps {

}

const { } = styles

const Autocomplete = () => {
  return (
    <div className="autocomplete">
      <Field onChange={() => { }} classNames="autocomplete__field" />
      <Dropdown classNames="autocomplete__dropdown" elements={[{key: '1', value: 'text'}]} />
    </div>
  )
}

export default Autocomplete
