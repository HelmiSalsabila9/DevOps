import {GiPencilBrush} from 'react-icons/gi'
import SectionHead from '../../components/SectionHead';
import {drawing} from '../../data';
import Drawings from '../../components/Drawings';
import './drawing.css'

const Drawing = () => {
  return (
    <>
    <section className='drawing'>
        <div className="container drawings__container">
            <SectionHead icon={<GiPencilBrush/>} title="Drawings"/>
            <p>Drawings merupakan cara menggambar menggunakan bahasa pemrograman Python, bertujuan untuk pembelajaran (Edukasi). <br/> Suka dengan cara menggambar menggunakan Python? Kamu bisa memberikan dukungan dengan berdonasi.<br /><a href="https://saweria.co/helmisalsabila" target='_blank' rel="noreferrer noopener" className='btn sm'><b>Saweria</b></a> atau <a href="https://trakteer.id/helmisalsabila" target='_blank' rel="noreferrer noopener" className='btn sm'><b>Trakteer</b></a><br/>Terimakasih atas dukungan Anda!</p>
        </div>
      <div className="container drawing__container">
        {
          drawing.map(({id, image, path}) => {
            return <Drawings key={id} image={image} path={
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

export default Drawing


