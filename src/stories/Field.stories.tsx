import React, { ChangeEvent } from 'react'
import { Story, Meta } from '@storybook/react'

import { Field, FieldProps } from './../components/common'
import './field.scss'

export default {
  title: 'Common/Field',
  component: Field,
  argTypes: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => { console.log(e.target.value)}
  }
} as Meta

const Template: Story<FieldProps> = (props) => <Field {...props} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {}


export const CustomInput = Template.bind({})
CustomInput.args = {
  classNames: 'test__class',
  placeholder: 'Hello'
}




