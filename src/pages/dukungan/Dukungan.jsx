import Header from '../../components/Header'
import HeaderImage from '../../images/header_dukungan.png'
// import {AiOutlineMail} from 'react-icons/ai'
// import {BsWhatsapp} from 'react-icons/bs'
// import {BsInstagram} from 'react-icons/bs'
// import {BsLinkedin} from 'react-icons/bs'
// import {FaTiktok} from 'react-icons/fa'
// import {AiFillYoutube} from 'react-icons/ai'
import {FaDonate} from 'react-icons/fa'
import {BiDonateHeart} from 'react-icons/bi'
import {BiQrScan} from 'react-icons/bi'

import './dukungan.css'

const Dukungan = () => {
  return (
    <>
      <Header title="Dukungan" image={HeaderImage}>
        Terimakasih atas dukungannya semoga Allah SWT membalas semua kebaikan anda.
      </Header>
      <section className='dukungan'>
        <div className="container dukungan__container">
          <div className="dukungan__wrapper">
            <a href="https://saweria.co/helmisalsabila" target='_blank' rel='noreferrer noopener' alt="Dukungan Saweria"><FaDonate/> Saweria</a>
            <a href="https://trakteer.id/helmisalsabila" target='_blank' rel='noreferrer noopener' alt="Dukungan Trakteer"><BiDonateHeart/> Trakteer</a>
            <a href="/about" rel='noreferrer noopener' alt="Dukungan QRIS"><BiQrScan/> QRIS</a>
          </div>
          <div className="dukungan__wrapper">
            {/* <a href="https://www.tiktok.com/@hels.id" target='_blank' rel='noreferrer noopener' alt="Tiktok"><FaTiktok/></a>
            <a href="https://lingkedin.com/in/helmisalsabila9/" target='_blank' rel='noreferrer noopener' alt="LinkedIn"><BsLinkedin/></a>
            <a href="https://www.youtube.com/channel/UCV3nFQJw1bf03Ds9Pf5JcxA" target='_blank' rel='noreferrer noopener' alt="Youtube"><AiFillYoutube/></a> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Dukungan