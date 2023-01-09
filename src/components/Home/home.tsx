import React from 'react'
import './style.css';
import Logo from '../img/foto1.png';
import Nike from '../img/nike.png';
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import Cr7 from '../img/Cristiano-Ronaldo.jpg';

export const Home = () => {
  return (
    <div className='content'>
      <div className='div-content'>
        <nav>
          <div className='div-img'>
            <img src={Logo} alt="al nassr" />
          </div>
          <span className='span-socio'>SEJA SÓCIO-TORCEDOR</span>
          <span className='span-contato'>CONTATO</span>
          <div className='nike'>
            <img className='div-nike' src={Nike}></img>
          </div>
          <div className='github'>
            <a href='https://github.com/leopcgaldino' target="_blank">
            <img className='div-github' src={Github}></img>
            </a>
          </div>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/leonardo-galdino-de-oliveira-7146ba181/' target="_blank">
            <img src={Linkedin}></img>
            </a>
          </div>
        </nav>
      </div>

      <div className='content2'>
        <div className='div-content2'>
          <img className='img-cr7' src={Cr7}></img>
        </div>
        <h1>ESTREIA DIA 14</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit enim minima explicabo iste distinctio possimus mollitia exercitationem, veniam quos est itaque non odio dolore laboriosam impedit porro quam necessitatibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit enim minima explicabo iste distinctio possimus mollitia exercitationem, veniam quos est itaque non odio dolore laboriosam impedit porro quam necessitatibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit enim minima explicabo iste distinctio possimus mollitia exercitationem, veniam quos est itaque non odio dolore laboriosam impedit porro quam necessitatibus.</p>
      </div>
    </div>
  )
}
