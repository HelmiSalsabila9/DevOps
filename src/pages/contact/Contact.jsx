import Header from '../../components/Header'
import HeaderImage from '../../images/header_kontak.png'
import {AiOutlineMail} from 'react-icons/ai'
// import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'

import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Kontak & Media Sosial" image={HeaderImage}>
        Menerima bekerja sama dalam hal bisnis ataupun yang lainnya serta kritik dan saran agar website yang saya buat jauh lebih baik lagi. Silakan hubungi yang ada di bawah ini:  
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:helmisalsabila70@gmail.com" target='_blank' rel='noreferrer noopener' alt="Email"><AiOutlineMail/></a>
            {/* <a href="https://wa.me/+6285900386218" target='_blank' rel='noreferrer noopener' alt="Whatsapp"><BsWhatsapp/></a> */}
            <a href="https://instagram.com/hels.ae" target='_blank' rel='noreferrer noopener' alt="Instagram"><BsInstagram/></a>
          </div>
          <div className="contact__wrapper">
            <a href="https://www.tiktok.com/@hels.id" target='_blank' rel='noreferrer noopener' alt="Tiktok"><FaTiktok/></a>
            <a href="https://lingkedin.com/in/helmisalsabila9/" target='_blank' rel='noreferrer noopener' alt="LinkedIn"><BsLinkedin/></a>
            <a href="https://www.youtube.com/channel/UCV3nFQJw1bf03Ds9Pf5JcxA" target='_blank' rel='noreferrer noopener' alt="Youtube"><AiFillYoutube/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
