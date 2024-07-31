import Footer from '../../component/Footer'
import '../../styles/about.css'

export default function About() {
  return (
    <div className="about">
      <h1>About <span>Us</span></h1>
      <div className='img'>
        <img src={require('../../assets/images/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers (1).png')} alt=''/>
      </div>
      <p>Were are passionate about helping people find their perfect home.With years of experience in 
        the real estate is dedicate to providing exceptional service and unparalled knowlege of the local
        market.Our mission is to make your home buying or selling experience as smooth and stress-free as 
        possible.
      </p>
      <Footer/>
    </div>
  )
}

