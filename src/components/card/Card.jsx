import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './Card.scss'

// Composant qui affiche une carte pour un logement.
// accommodation - Le logement à afficher.
export default function Card({ accommodation: { id, cover, title } }) {
    return (
        <li className="card" id={`accommodation-${id}`}>
            <Link to={`/logement/${id}`} className="card__link">
                <img
                    className="card__cover"
                    src={cover}
                    alt={`Vue de ${title}`}
                    loading="lazy"
                />
                <h3 className="card__title">{title}</h3>
            </Link>
        </li>
    )
}

// Définition des propTypes
Card.propTypes = {
    accommodation: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
}
