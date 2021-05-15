import { render, screen, fireEvent } from '@testing-library/svelte'

import SvelteComponent from '../Component'

test('renders', () => {
  render(SvelteComponent)

  expect(screen.queryByRole('rolename')).toBeInTheDocument()
})
