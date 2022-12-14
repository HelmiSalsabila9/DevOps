import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Drawing from '../drawing/Drawing'
import './home.css'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Drawing/>
      <Values/>
      <FAQs/>
    </>
  ) 
}

export default Home
