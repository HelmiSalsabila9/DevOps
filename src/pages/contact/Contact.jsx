import Header from '../../components/Header'
import HeaderImage from '../../images/header_kontak.png'
import {MdEmail} from 'react-icons/md'
// import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Berhubungan" image={HeaderImage}>
        Terima bekerja sama bisnis ataupun yang lainnya serta kritik dan saran agar website yang saya buat jauh lebih baik lagi. Silakan hubungi yang ada di bawah ini:  
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:no-reply@example.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            {/* <a href="https://m.me/hels" target='_blank' rel='noreferrer noopener'><BsMessenger/></a> */}
            <a href="https://wa.me/085900386218" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
