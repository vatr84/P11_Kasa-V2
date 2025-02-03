import './Footer.scss'
import Logo from '../Logo'


export default function Footer() {
    return (
        <footer className="footer">
            <Logo className="logo" color="currentColor" />
            <p className="footer__credit">
                © 2020 Kasa. All<br className="footer__credit-break" /> rights reserved
            </p>
        </footer>
    )
}
