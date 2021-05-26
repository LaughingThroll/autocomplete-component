import React from 'react'
import './dropdown.scss'


interface DropdownElement {
  key: string
  value: any
  active?: boolean
}

export interface DropdownProps {
  elements: DropdownElement[]
  classNames?: string 
}

const Dropdown = ({ elements = [], classNames }: DropdownProps) => {
  return (
    <div className={`dropdown ${classNames}`}>
      <ul className="dropdown__list">
        {elements.map(({ key, value, active  }) => <li key={key} className={`dropdown__element ${active ? 'dropdown__element--active': ''}` }>{value}</li>)}
      </ul>
    </div>
  )
}

export default Dropdown