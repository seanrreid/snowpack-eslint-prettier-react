import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('The Button component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button as="primary">Hello</Button>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="button button-primary"
        type="button"
      >
        Hello
      </button>
    `)
  })
  it('should have primary class', () => {
    render(<Button as="primary">Hello</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('button-primary')
  })
  it('should have secondary class', () => {
    render(<Button as="secondary">Hello</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('button-secondary')
  })
})
