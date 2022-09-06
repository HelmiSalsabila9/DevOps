import Header from '../../components/Header'
import HeaderImage from '../../images/header_karir.png'
import './karir.css'

const Karir = () => {

  const galleryLength = 14;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/karir${i}.png`))
  }


  return (
    <>
      <Header title='Karir (BELUM DIBUKA/MAINTENANCE)' image={HeaderImage}>
        Bergabunglah dengan kami dan jadi bagian dari perusahaan yang bergerak dibidang promosi dan bisnis internasional dengan menerapkan senyum, sapa, salam, sopan, santun, semangat dan serius (7s).
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Karir ${index + 1}`} />
                <button className='btn lg'>Lamar sekarang</button>
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Karir

