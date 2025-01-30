import useCollapse from '../../hooks/useCollapse'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import './Collapse.scss'

// title - Le titre de Collapse
// content - Le contenu de Collapse
export default function Collapse({ title = '', content = '' }) {

    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()


    useCollapse(detailsRef, summaryRef, contentRef)


    const processedContent = Array.isArray(content) ? (
        <ul className="list">
            {content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    ) : (
        <p>{content}</p>
    )

    return (
        <details className="collapse" ref={detailsRef}>
            <summary className="collapse__title" ref={summaryRef}>
                {title}
            </summary>
            <div className="collapse__content" ref={contentRef}>
                {processedContent}
            </div>
        </details>
    )
}

// Définition des propTypes
Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
