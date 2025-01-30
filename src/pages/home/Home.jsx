import homeBanner from '../../assets/home-banner.jpg'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Loader from '../../components/loader/Loader'
import accommodationsData from '../../data/logements.json'
import { useFetchData } from '../../hooks/useFetchData'
import './Home.scss'

// Rend le composant de la page d'accueil.
export default function Home() {
    const { isLoading, data } = useFetchData(accommodationsData)
    return (
        <main className="content container">
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} />
            <section className="logements">
                <h2 className="sr-only">Liste de logements</h2>
                {isLoading ? (
                    <Loader />
                ) : !data ? (
                    <div>Pas de données disponibles</div>
                ) : (
                    <Gallery accommodations={data} />
                )}
            </section>
        </main>
    )
}
