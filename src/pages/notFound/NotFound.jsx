import {Link} from 'react-router-dom'
import {BsEmojiSmile} from 'react-icons/bs'
import './notFound.css'

const NotFound = () => {
  return (
      <section>
        <div className="container notfound__container">
          <h4>~~~ COMINGSOON ~~~</h4>
          <h3>HALAMAN SEDANG</h3>
          <h2>MAINTENANCE</h2>
          <small>DITUNGGU SEBENTAR LAGI YAA</small>
          <p><BsEmojiSmile/></p>
          <Link to='/' className='btn'>Kembali</Link>
        </div>
      </section>
  )
}

export default NotFound
