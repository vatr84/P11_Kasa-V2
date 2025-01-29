import links from '../../data/mainNav.json'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import './Header.scss'
import Logo from '../Logo'
import Nav from '../nav/Nav'

// links - Les liens à afficher dans l'en-tête.
export default function Header() {
    return (
        <header className="header container">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <Logo label="Logo Kasa" />
            </NavLink>
            <Nav links={links} />
        </header>
    )
}

// Définition des propTypes
Header.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
