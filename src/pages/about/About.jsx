import Header from '../../components/Header'
import HeaderImage from '../../images/header_about.png'
import StoryImgae from '../../images/about1.png'
import VisionImgae from '../../images/about2.png'
import MissionImgae from '../../images/about3.png'
import Donasi from '../../images/about4.png'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="Tentang Kami" image={HeaderImage}>
        www.helmisalsabila.com
      </Header>

      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImgae} alt="Story images" />
          </div>
          <div className="about__section-content">
            <h1>Tujuan</h1>
            <p>Saya memiliki mimpi yang bagaimana kegiatan bisnis, promosi, blog, portfolio dan kegiatan lainnya yang dapat memudahkan dan bermanfaat bagi masyarakat bisa diconvert untuk dijadikan sistem yang dimana setiap kegiatan dapat berkaitan satu dengan yang lainnya sehingga kegiatan bisnis, promosi, blog dan lainnya bisa berjalan dengan baik.</p>
            <p>Contoh ketika membuat blog yang berkaitan dengan suatu produk atau informasi lainnya dalam blog tersebut membahas berkaitan dengan bisnis atau produk dan bisnis tersebut berkaitan dengan promosi sehingga dalam satu informasi sudah memcakup semuanya</p>
            <p>Apabila user tertarik, user langsung membeli produk tersebut tanpa harus mencari di platform lainnya karena diwebsite ini sudah tersedia produk yang diinginkan.</p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Visi</h1>
            <p>Menjadi platform digital perdagangan lokal yang memberikan layanan dan produk terbaik serta kepuasan pelanggan dan berkontribusi dalam perdagangan lokal dan internasional.</p>
          </div>
          <div className="about__section-image-vision">
            <img src={VisionImgae} alt="Vision images" />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImgae} alt="Mission images" />
          </div>
          <div className="about__section-content">
            <h1>Misi</h1>
            <p>Menjadi platform digital perdagangan local terbaik di Indonesia yang menjadisatukan semua kegiatan menjadi suatu bisnis dengan memberikan kenyamanan, kepuasan dan terpercaya.</p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Open Donasi</h1>
            <p>Donasi bisa dilakukan dengan menscan QRIS pada gambar disamping kanan arahkan kursor ke gambar agar gambar bisa tegak lurus saat discan, atau bisa juga menggunakan cara yang dibawah ini.</p>
            <h3><p><a href="https://saweria.co/helmisalsabila" target="_blank" rel="noreferrer noopener">Donasi boleh disini.</a></p></h3>
            <p>Saya ucapkan terimakasih banyak semoga Allah swt membalas kebaikan anda.</p>
            <p>Amin.. </p>
          </div>
          <div className="about__section-image-vision">
            <img src={Donasi} alt="Donasi" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
