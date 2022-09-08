import Header from '../../components/Header'
import HeaderImage from '../../images/header_hosting.png'
import {hosting} from '../../data'
import Hosting from '../../components/Hosting'
import './hostings.css'

const Hostings = () => {
  return (
    <>
    <Header title='Rekomendasi Hosting Terbaik 2022' image={HeaderImage}>
      Hosting merupakan tempat penyimpanan file dan data website sehingga dapat diakses secara global atau yang biasa kita kenal dengan proses mengonlinekan website.  
    </Header>
    <section className='hostings'>
      <div className="container hostings__container">
        {
          hosting.map(({id, image, title, info, path}) => {
            return <Hosting key={id} image={image} title={title} info={info} path={
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

export default Hostings
