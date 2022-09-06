import Image from '../images/values.png'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="value__image">
                    <img src={Image} alt="ValuesImage" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Pengalaman"/>
                <p>
                    Ini adalah beberapa pengalaman kerja atau magang saya, sebagai berikut:
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values