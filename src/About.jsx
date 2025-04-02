import './About.css'
import Navbar from './Navbar'


function About() {
  return (
    <>
      <div className='navbar'>
        <Navbar curr='About' />
      </div>

      <div className='aboutPageContent'>
        <div className='portrait'>
          <img src='/portrait.JPG' />
        </div>
        <div className='aboutMainTxt'>
          <h3>
            Hello! I am a junior at Cornell University studying Computer Science and
            Economics. My professional and academic interests are: Compilers, Programming Languages, Operating Systems,
            International Trade, Behavioral Economics, and Game Theory.
          </h3>
        </div>
        <div className='addAboutTxt'>

        </div>


      </div>
    </>)
}

export default About;