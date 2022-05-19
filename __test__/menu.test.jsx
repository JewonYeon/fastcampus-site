import { render, screen } from '@testing-library/react'
import Menu from '@/components/Menu';
import '@testing-library/jest-dom'

describe('Menu', () => {
  it('fastcampus라는 텍스트를 가지고 있어야 한다.', () => {
    render( <Menu />);
    const menuText = screen.getByText('fastcampus');

    expect(menuText).toBeInTheDocument();
  })
})