import { useState, useEffect } from 'react'

// Hook personnalisé pour récupérer des données à partir d’une URL donnée ou utiliser des données JSON locales.
export function useFetchData(urlOrData) {
    const [state, setState] = useState({
        isLoading: true,
        data: [],
        error: null,
    })

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            const fetchData = async () => {
                try {
                    const response = await fetch(urlOrData)
                    const data = await response.json()
                    setState({ isLoading: false, data, error: null })
                } catch (error) {
                    setState({ isLoading: false, data: null, error: error })
                }
            }
            fetchData()
        } else {
            setState({ isLoading: false, data: urlOrData })
        }
    }, [urlOrData])

    return state
}
