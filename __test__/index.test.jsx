// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Index from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('메뉴가 렌더링 되어야 한다.', () => {
    render( <Index />);
    const menu = screen.getByRole('navigation');

    expect(menu).toBeInTheDocument();
  })

  it('배너가 렌더링 되어야 한다.', () => {
    render( <Index />);
    const banner = screen.getByRole('banner');

    expect(banner).toBeInTheDocument();
  })

  it('강의 목록이 렌더링 되어야 한다.', () => {
    render( <Index />);
    const lectureList = screen.getByTitle('lectureList')

    expect(lectureList).toBeInTheDocument();
  })
})