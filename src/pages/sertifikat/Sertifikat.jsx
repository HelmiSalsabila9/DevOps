import Header from '../../components/Header'
import HeaderImage from '../../images/header_sertifikat.png'
import './sertifikat.css'

const Sertifikat = () => {

  const sertiLength = 21;
  const images = []

  for (let i = 1; i <= sertiLength; i++) {
    images.push(require(`../../images/serti${i}.png`))
  }


  return (
    <>
      <Header title='Lisensi dan Sertifikat' image={HeaderImage}>
        Kegiatan atau kursus yang saya ikuti dan penyelesaian dari studi kasus untuk mendapatkan sertifikat.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Sertifikat ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Sertifikat

