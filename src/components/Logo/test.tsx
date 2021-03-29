import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
    it('should render the logo with white label', () => {
        renderWithTheme(<Logo color={'white'} />)

        expect(
            screen.getByRole('img', { name: /won games/i }).parentElement
        ).toHaveStyle({
            color: theme.colors.white
        })
    })

    it('should render the logo with black label', () => {
        renderWithTheme(<Logo color={'black'} />)

        expect(
            screen.getByRole('img', { name: /won games/i }).parentElement
        ).toHaveStyle({
            color: theme.colors.black
        })
    })

    it('should render the large size logo', () => {
        renderWithTheme(<Logo color={'black'} size={'large'} />)

        expect(
            screen.getByRole('img', { name: /won games/i }).parentElement
        ).toHaveStyle({
            width: '20rem',
            height: '5.9rem'
        })
    })

    it('should render the normal size logo', () => {
        renderWithTheme(<Logo color={'black'} size={'normal'} />)

        expect(
            screen.getByRole('img', { name: /won games/i }).parentElement
        ).toHaveStyle({
            width: '11rem',
            height: '3.3rem'
        })
    })

    it('should render the logo without text', () => {
        renderWithTheme(<Logo color={'black'} hideOnMobile />)
        expect(
            screen.getByRole('img', { name: /won games/i }).parentElement
        ).toHaveStyleRule('width', '5.8rem', {
            media: '(max-width: 768px)'
        })
    })
})
