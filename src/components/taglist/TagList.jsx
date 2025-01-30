import PropTypes from 'prop-types'
import './TagList.scss'

// Les balises à afficher
// Le nom de la classe à ajouter
export default function TagList({ tags, className }) {
    return (
        <ul className={`tagList ${className}`}>
            {tags.map((tag) => (
                <li key={tag}>
                    <span className="tag">{tag}</span>
                </li>
            ))}
        </ul>
    )
}

// Définition des propTypes
TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
}
