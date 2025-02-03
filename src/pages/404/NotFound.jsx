import notFound404 from '../../assets/404.svg'
import { Link } from 'react-router'
import './NotFound.scss'

// Rend le composant de page NotFound.
export default function NotFound() {
    return (
        <main className="notFound container">
            <img src={notFound404} alt="" />
            <h1 className="notFound__title">Oups! La page que<br className="notFound__title-break" /> vous demandez n&apos;existe pas.</h1>
            <p>
                <Link to="/" className="notFound__link">Retrouner sur la page d&apos;accueil</Link>
            </p>
        </main>
    )
}
