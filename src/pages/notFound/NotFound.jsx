import {Link} from 'react-router-dom'
import {BsEmojiSmile} from 'react-icons/bs'
import './notFound.css'

const NotFound = () => {
  return (
      <section>
        <div className="container notfound__container">
          <h3>Halaman sedang</h3>
          <h2>MAINTENANCE</h2>
          <p><BsEmojiSmile/></p>
          <Link to='/' className='btn'>Kembali</Link>
        </div>
      </section>
  )
}

export default NotFound
