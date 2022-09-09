import {Link} from 'react-router-dom'
import Image from '../images/aing.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Halo, Saya Helmi Salsabila</h4>
          <h1>Mahasiswa Teknik Informatika di Universitas Logistik dan Bisnis Internasional</h1>
          <p>Saya seorang Mahasiswa di Universitas Logistik dan Bisnis Internasional mencari peluang dalam Pemrograman, Analis Data, Sains Data, Pembelajaran Mesin dan Desain dengan latar belakang Teknik Informatika.</p>
          <Link to="/about" className="btn lg">Lihat Detail</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader