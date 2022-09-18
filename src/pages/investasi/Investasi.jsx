import Header from '../../components/Header'
import HeaderImage from '../../images/header_inves.png'
import {inves} from '../../data'
import Inves from '../../components/Inves'
import './investasi.css'

const Investasi = () => {
  return (
    <>
    <Header title='Rekomendasi Investasi Terbaik Saat Ini' image={HeaderImage}>
    Investasi adalah usaha untuk menanamkan modal atau dana dengan harapan memperoleh keuntungan di masa yang akan datang. 
    </Header>
    <section className='investasi'>
      <div className="container investasi__container">
        {
          inves.map(({id, image, title, info, path}) => {
            return <Inves key={id} image={image} title={title} info={info} path={
              [
                {link: path}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Investasi
