import { useEffect } from 'react'

// La fenêtre défile vers le haut lorsque l'utilisateur accède à une nouvelle page.
export function useScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
}
