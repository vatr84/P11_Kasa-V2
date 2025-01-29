import PropTypes from 'prop-types'
import './Banner.scss'

// title - Le titre à afficher. S'il n'est pas fourni, aucun titre ne sera affiché.
// image - L'URL de l'image à afficher.
export default function Banner({ title = '', image = '' }) {
    return (
        <header
            className="banner"
            style={{ '--background-image': `url(${image})` }}
        >
            {title && <h2 className="banner__title">{title}</h2>}
        </header>
    )
}

// Définition des propTypes
Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}
