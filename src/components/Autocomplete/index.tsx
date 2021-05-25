import React from 'react'
import styles from './autocomplete.module.scss'

import { Field } from './../common'

export interface AutocompleteProps {

}

const { } = styles

const Autocomplete = () => {
  return (
    <div className="autocomplete">
      <Field onChange={() => { }} classNames="autocomplete__field" />
      <div className="autocomplete__dropdown dropdown">
            
      </div>
    </div>
  )
}

export default Autocomplete
