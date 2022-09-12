import Header from '../../components/Header'
import HeaderImage from '../../images/header_bisnis.png'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
// import {AiFillShopping} from 'react-icons/ai'
import {TiShoppingCart} from 'react-icons/ti'
import {BsShop} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import Business from '../../components/Business'
import './bisnis.css'

const Bisnis = () => {
  return (
    <>
    <Header title='Produk Terbaru dan Terlaris' image={HeaderImage}>
      Terjangkau Terlaris Berkualitas dan Terbaik untuk anda  
    </Header>
    <section className='trainers'>
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Business key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <FaTiktok/>, link: socials[1]},
                {icon: <TiShoppingCart/>, link: socials[2]},
                {icon: <BsShop/>, link: socials[3]}
                // {icon: <AiFillShopping/>, link: socials[4]},
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Bisnis
