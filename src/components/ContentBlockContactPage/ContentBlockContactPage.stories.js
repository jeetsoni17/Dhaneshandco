/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import ContentBlockContactPage from './ContentBlockContactPage'

export default {
  title: 'Essential-Coaching/ContentBlockContactPage',
  component: ContentBlockContactPage,
}

const Template = args => <ContentBlockContactPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Get Inquiry',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Read more...',
}

export const Large = Template.bind({})
Large.args = {
  bs: 'btn-lg',
  label: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  bs: 'btn-sm',
  label: 'Small Button',
}
