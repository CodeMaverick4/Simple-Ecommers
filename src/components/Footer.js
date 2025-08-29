// import {a} from 'react-router;'
const Footer = () => {
    return (
        <footer>
            <h4 className="footer-title">The Generics</h4>
            <div class="footer-icons">
                <a to="https://www.youtube.com"> <img src="./img/youtube.jpg" alt="" width={40}/> </a>
                <a to="https://spotify.com"><img src="./img/Spotify Logo.png" alt="" width={40}/></a>
                <a to="https://facebook.com"><img src="./img/Facebook Logo.png" alt="" width={40}/></a>
            </div>
        </footer>
    )
}

export default Footer