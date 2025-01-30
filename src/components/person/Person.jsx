import PropTypes from 'prop-types'
import './Person.scss'

// name - Le nom de la personne
// avatar - L'URL de l'avatar de la personne
export default function Person({ name = '', avatar = '' }) {
    return (
        <figure className="person">
            <img
                className="person__avatar"
                src={avatar}
                alt={`Photo de profil de ${name}`}
            />
            <figcaption className="person__name">{name}</figcaption>
        </figure>
    )
}

// Définition des propTypes
Person.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
}
