import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Dropdown, DropdownProps } from './../../components/common'
import './dropdown.scss'

export default {
  title: 'Common/Dropdown',
  component: Dropdown,
  argTypes: {
    elements: [{ key: '1', value: 'text' }, { key: '2', value: 'someText' }, { key: '3', value: 'someTextText' }, { key: '4', value: 'someSometextText' }]
  }
} as Meta

const Template: Story<DropdownProps> = (props) => <Dropdown {...props} />

export const DefaultDropdown = Template.bind({})
DefaultDropdown.args = {
  elements: [{ key: '1', value: 'text' }, { key: '2', value: 'someText' }, { key: '3', value: 'someTextText' }, { key: '4', value: 'someSometextText', active: true }]
}

export const DropdownWithCustomClass = Template.bind({})
DropdownWithCustomClass.args = {
  elements: [{ key: '1', value: 'text' }, { key: '2', value: 'someText' }, { key: '3', value: 'someTextText' }, { key: '4', value: 'someSometextText' }],
  classNames: 'test-dropdown'
}