import {Link} from "react-router-dom"
import Logo from '../images/logoku.png'
import {FaLinkedin} from 'react-icons/fa'
import {SiKaggle} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article className="">
                <Link to="/" className="logo">
                    <img src={Logo} alt="Helmi Salsabila" />
                </Link>
                <p>
                    HelmiSalsabila.com adalah situs yang bergerak dibidang promosi, bisnis dan kerja sama ataupun yang lainnya.
                </p>
                <div className="footer__socials">
                    <a href="https://github.com/HelmiSalsabila9" target="_blank" rel="noreferrer noopener"><AiFillGithub/></a>
                    <a href="https://www.kaggle.com/helmisalsabila" target="_blank" rel="noreferrer noopener"><SiKaggle/></a>
                    <a href="https://www.youtube.com/channel/UCV3nFQJw1bf03Ds9Pf5JcxA" target="_blank" rel="noreferrer noopener"><AiFillYoutube/></a>
                    <a href="https://lingkedin.com/in/helmisalsabila9/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://twitter.com/helsid9" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/hels.ae" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    <a href="https://www.tiktok.com/@hels.id" target="_blank" rel="noreferrer noopener"><FaTiktok/></a>
                </div>
            </article>
            <article>
                <h4>Jelajahi Sekarang</h4>
                <Link to="/bisnis">Produk</Link>
                <Link to="/mitra">Kemitraan</Link>
                <Link to="/karir">Karir</Link>
                <Link to="/about">Tentang Kami</Link>
            </article>
            <article>
                <h4>Wawasan</h4>
                <Link to="/maintenance">Blog</Link>
            </article>
            <article>
                <h4>Berhubungan</h4>
                <Link to="/contact">Kontak</Link>
                <a href="https://ageneskrimcampinaarjawinangun.business.site/" target='_blank' rel="noreferrer noopener">Loker</a>
                <a href="https://saweria.co/helmisalsabila" target='_blank' rel="noreferrer noopener">Donasi</a>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Copyright &copy; 2022 <a href="/" className="footer_name">HelmiSalsabila.com</a>. All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer