import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
// import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Projek"/>
            <p>Projek adalah kegiatan yang saya lakukan untuk menyelesaikan studi kasus.</p>
            <div className="programs__wrapper">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                {/* <Link to={path} className="btn sm">Learn more <AiFillCaretRight/></Link> */}
                                <a href={path}  className="btn sm" target='_blank' rel='noreferrer noopener'>Lihat detail <AiFillCaretRight/></a>
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