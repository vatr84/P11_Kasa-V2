import PropTypes from 'prop-types'
import Card from '../card/Card'
import './Gallery.scss'

// Composant de la galerie qui affiche une liste d'hébergements.
// accommodations - Les hébergements à afficher.
export default function Gallery({ accommodations }) {
    return (
        <ul className="gallery">
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </ul>
    )
}

// Définition des propTypes
Gallery.propTypes = {
    accommodations: PropTypes.arrayOf(PropTypes.object).isRequired,
}
