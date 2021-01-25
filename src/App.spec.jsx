import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="App"
      >
        <h1>
          Hello World
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, similique.
        </p>
      </section>
    `)
  })
})
