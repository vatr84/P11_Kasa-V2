import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import './Nav.scss'

// links - Un tableau d'objets de lien.
// links.to - L'URL du lien.
// links.label - L'étiquette du lien.
// links.ariaLabel - L'étiquette aria du lien.
export default function Nav({ links }) {
    if (!links || Object.keys(links).length === 0) {
        return null
    }

    return (
        <nav aria-label="Menu principal">
            <ul className="nav">
                {Object.values(links).map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink
                            className="nav__link"
                            to={link.to}
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


// Définition des propTypes
Nav.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
