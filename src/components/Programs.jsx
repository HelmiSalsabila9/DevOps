import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
// import {Link} from 'react-router-dom'
import {MdDownload} from 'react-icons/md'

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Projek"/>
            <p>Projek ini adalah kegiatan yang saya lakukan untuk menyelesaikan studi kasus. <br/> Suka dengan projeknya? Kamu bisa memberikan dukungan dengan berdonasi.<br /><a href="https://saweria.co/helmisalsabila" target='_blank' rel="noreferrer noopener" className='btn sm'><b>Saweria</b></a> atau <a href="https://trakteer.id/helmisalsabila" target='_blank' rel="noreferrer noopener" className='btn sm'><b>Trakteer</b></a><br/>Terimakasih atas dukungan Anda!</p>
            <div className="programs__wrapper">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                {/* <Link to={path} className="btn sm">Learn more <AiFillCaretRight/></Link> */}
                                <a href={path} className="btn sm" target='_blank' rel='noreferrer noopener'>Unduh <MdDownload/></a>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Programs