import { render, screen } from '@testing-library/react'
import Banner from '@/components/Banner';
import '@testing-library/jest-dom'

describe('Banner', () => {
  it('배너라는 텍스트를 가지고 있어야 한다.', () => {
    render( <Banner />);
    const bannerText = screen.getByText('배너');

    expect(bannerText).toBeInTheDocument();
  })
})