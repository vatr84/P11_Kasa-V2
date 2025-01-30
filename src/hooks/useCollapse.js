import { useEffect } from 'react'

// Constantes pour la durée de l'animation et l'assouplissement
const DURATION = 250
const EASING = 'ease-out'

// L'ouverture et la fermeture de Collapse
export default function useCollapse(detailsRef, summaryRef, contentRef) {
    useEffect(() => {
        // Valeurs actuelles des Refs   
        const details = detailsRef.current
        const summary = summaryRef.current
        const content = contentRef.current

        // Initialise la variable pour l'animation
        let animation = null

        // Gére les événements de clic sur l'élément summary
        const onClick = (e) => {
            e.preventDefault()
            details.style.overflow = 'hidden'

            // Si Collapse est ouvert, fermer le
            if (details.open) {
                shrink()
            // Si Collapse est fermé, ouvrer le    
            } else {
                open()
            }
        }

        // Ferme Collapse
        const shrink = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Anime la hauteur de l'élément détails de startHeight à endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(false)
        }

        // Ouvre Collapse
        const open = () => {
            details.style.height = `${details.offsetHeight}px`
            details.open = true
            window.requestAnimationFrame(expand)
        }

        // Développe Collapse
        const expand = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Anime la hauteur de l'élément details de startHeight à endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(true)
        }

       // Nettoye après la fin de l'animation
        const onAnimationFinish = (open) => {
            animation = null
            details.open = open
            details.style.height = details.style.overflow = ''
            details.removeAttribute('style')
        }

        // Ajoute l'événement click listener à l'élément summary
        summary.addEventListener('click', onClick)

        // Supprime l'écouteur d'événements lorsque le composant est démonté
        return () => {
            summary.removeEventListener('click', onClick)
        }
    }, [detailsRef, summaryRef, contentRef])
}
