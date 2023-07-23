import CategoriesBar from './component/CategoriesBar'
import Container from './component/Container'
import Navbar from './component/Navbar'
import NavigatorWrapper from './component/NavigatorWrapper'
import Search from './component/Search'
import SlideViews from './component/Slide'
import SideBar from './component/SideBar'
import StarPerson from './component/StarPerson'
import TrustedBy from './component/TrustedBy'
import UserCard from './component/UserCard'
import './index.css'
import RightArr from './component/ArrowButton'
import ServiceSlide from './component/ServiceSlide'
import DescriptionService from './component/DescriptionsService'
import MarketPlace from './component/MarketPlace'
import Business from './component/Business'
import Testimonials from './component/Testimonials'
import TestimonialSlide from './component/TestimonialSlide'
import LogoMakerBanner from './component/LogoMakerBanner'
import FiveerGuide from './component/FiveerGuide'
import FindTalent from './component/FindTalent'
import FindTalent1 from './component/FindTalent1'
import ProjectDone from './component/ProjectDone'
import Footer from './component/Footer'
import { backgroundImage } from './style'
import SlideBackground from './component/SlideBackground'

function App() {
  return (
    <>
      <SideBar isShow={false} />
      <Navbar />
      <SlideBackground />
      <TrustedBy />
      <Container>
        <SlideViews />
        <ServiceSlide />
      </Container>
      <Container className=' bg-[#f1fdf7]'>
        <DescriptionService />
      </Container>
      <Container>
        <MarketPlace />
      </Container>
      <Container className='bg-[#0d084d]'>
        <Business />
      </Container>
      <Container>
        <TestimonialSlide />
      </Container>
      <Container className='max-sm:bg-[#446ee7]'>
        <LogoMakerBanner />
      </Container>
      <Container className='bg-[#f5f5f5]'>
        <ProjectDone />
      </Container>
      <Container >
        <FiveerGuide/>
        <FindTalent1/>
      </Container>
      <Container className='sm:pt-16 pt-6 border-t-[1px]'>
        <Footer />
      </Container>
    </>
  )
}
export default App
