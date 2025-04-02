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
            Hello! I'm Carson. I am a junior at Cornell University studying Computer Science and
            Economics. My professional and academic interests are: Compilers, Programming Languages, Operating Systems,
            International Trade, Behavioral Economics, and Game Theory.
          </h3>
          <br />
          <h3>
            I'm deeply interested in philosophy, linguistics, geography, and many other things.
            I try to regularly write about the things that interest me! A currated list of writings is the purpose of the correspondingly named section on this site.
          </h3>
          <br />
          <h3>
            Lastly, the projects section serves as a more detailed supplement to my resume to show off the various technical
            projects I have worked on.
          </h3>
        </div>
      </div>
      <footer className='aboutPgBottom'>
        <ul>
          <li>
            <a href='https://discord.com/users/1017183425314177135' target="_blank">
              <i class="fab fa-discord icon"></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cwolber/' target="_blank">
              <i class="fab fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href='mailto:ctw54@cornell.edu' target="_blank">
              <i class="fa fa-envelope icon"></i>
            </a>
          </li>
          <li>
            <a href='https://www.goodreads.com/user/show/137411275-carson-wolber' target="_blank">
              <i class="fab fa-goodreads icon"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>)
}

export default About;