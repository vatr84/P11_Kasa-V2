import PropTypes from 'prop-types'

// fill - La couleur de remplissage de l'étoile
function Star({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            width="24px"
            height="24px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    )
}


export default function Rating({
    score,                    // Le score à afficher
    activeColor = '#000',     // La couleur des étoiles actives
    mutedColor = '#E3E3E3',   // La couleur des étoiles inactives
}) {
    return (
        <div className="rating" aria-label={`Note de ${score} sur 5`}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < score ? activeColor : mutedColor} />
            ))}
        </div>
    )
}

// Définition des propTypes
Star.propTypes = {
    fill: PropTypes.string.isRequired,
}

Rating.propTypes = {
    score: PropTypes.string.isRequired,
    activeColor: PropTypes.string,
    mutedColor: PropTypes.string,
}
