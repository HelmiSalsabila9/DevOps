import Header from '../../components/Header'
import HeaderImage from '../../images/header_mitra.png'
import Card from '../../UI/Card'
import {plans} from '../../data'
import'./mitra.css'

const Mitra = () => {
  return (
    <>
    <Header title='Kemitraan (BELUM DIBUKA/MAINTENANCE)' image={HeaderImage}>
      Bergabunglah dengan kemitraan kami 
    </Header>
    <section className='plans'>
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              {/* <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              } */}
              <button className='btn lg'>Mulai sekarang</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Mitra