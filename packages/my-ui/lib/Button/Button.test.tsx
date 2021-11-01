import React from 'react'

import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as storeis from './Button.stories'

const { Text, Emoji } = composeStories(storeis)

test('render simple text', async () => {
  render(<Text />)
  const buttonElement = screen.getByText('Hello Button')
  expect(buttonElement).not.toBeNull()
})

test('render simple emoji', async () => {
  render(<Emoji />)
  const buttonElement = screen.getByText('😀 😎 👍 💯')
  expect(buttonElement).not.toBeNull()
})
