import aboutBanner from '../../assets/about-banner.jpg'
import Collapse from '../../components/collapse/Collapse'
import Banner from '../../components/banner/Banner'
import Loader from '../../components/loader/Loader'
import aboutData from '../../data/about.json'
import { useFetchData } from '../../hooks/useFetchData'
import './About.scss'

// Rend le composant de page About.
export default function About() {
    const { isLoading, data } = useFetchData(aboutData)

    return (
        <main className="container">
            <Banner title="À propos" image={aboutBanner} />

            <section className="about-sections">
                {isLoading ? (
                    <Loader />
                ) : !data ? (
                    <div>Pas de données disponibles</div>
                ) : (
                    data.map((section, index) => (
                        <Collapse
                            key={index}
                            title={section.title}
                            content={section.content}
                        />
                    ))
                )}
            </section>
        </main>
    )
}
