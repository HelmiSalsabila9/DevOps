import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Dukungan from './pages/dukungan/Dukungan'
import Karir from './pages/karir/Karir'
import Mitra from './pages/mitra/Mitra'
import Bisnis from './pages/bisnis/Bisnis'
import Sertifikat from './pages/sertifikat/Sertifikat'
import Hostings from './pages/hostings/Hostings'
import Investasi from './pages/investasi/Investasi'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
        
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='bisnis' element={<Bisnis/>} />
                <Route path='mitra' element={<Mitra/>} />
                <Route path='karir' element={<Karir/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='dukungan' element={<Dukungan/>} />
                <Route path='sertifikat' element={<Sertifikat/>} />
                <Route path='hostings' element={<Hostings/>} />
                <Route path='investasi' element={<Investasi/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App