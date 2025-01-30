import Collapse from '../../components/collapse/Collapse'
import Loader from '../../components/loader/Loader'
import Person from '../../components/person/Person'
import Rating from '../../components/Rating'
import TagList from '../../components/taglist/TagList'
import logementsData from '../../data/logements.json'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Carousel from '../../components/carousel/Carousel'
import { useFetchData } from '../../hooks/useFetchData'
import './Accommodation.scss'

// Hook personnalisé pour récupérer les données d’hébergement en fonction de l’URL fournie.
const useAccommodation = (url) => {
    const { isLoading, data: accommodations } = useFetchData(url)
    const { id } = useParams()
    const accommodation = Array.isArray(accommodations)
        ? accommodations.find((acc) => acc.id === id)
        : null

    return { isLoading, accommodation }
}

// Volet hébergement. Affiche les détails de l'hébergement.
export default function Accommodation() {
    useScrollToTop()
    const navigate = useNavigate()
    const { isLoading, accommodation } = useAccommodation(logementsData)

    useEffect(() => {
        if (!accommodation && !isLoading) {
            navigate('/404')
        }
    }, [accommodation, isLoading, navigate])

    if (isLoading) {
        return <Loader />
    }

    if (!accommodation) {
        return null
    }

    const {
        cover,
        title,
        location,
        host,
        rating,
        tags,
        description,
        equipments,
        pictures,
    } = accommodation

    return (
        <main className="accommodation container">
            {pictures ? (
                <Carousel key={pictures} pictures={pictures} />
            ) : (
                <img src={cover} alt="Cover image" />
            )}
            <section className="accommodation__summary">
                <hgroup className="accommodation__heading">
                    <h1 className="accommodation__title">{title}</h1>
                    {location && (
                        <p className="accommodation__location">{location}</p>
                    )}
                    <TagList className={`accommodation__tags`} tags={tags} />
                </hgroup>
                {host && (
                    <aside className="accommodation__infos">
                        <Rating score={rating} activeColor="#ff6060" />
                        <Person name={host.name} avatar={host.picture} />
                    </aside>
                )}
            </section>
            <section className="accommodation__details">
                <h2 className="sr-only">Details</h2>
                <Collapse title="Description" content={description} />
                <Collapse title="Équipements" content={equipments} />
            </section>
        </main>
    )
}
