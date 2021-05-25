import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import './field.scss' 


export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void 
  classNames?: string
}

const Field = ({ onChange, classNames, ...rest }: FieldProps) => {
  return (
    <div className={`field ${classNames}`}>
      <input onChange={onChange} type="text" className="field__input" {...rest} />
    </div>
  )
}

export default Field
