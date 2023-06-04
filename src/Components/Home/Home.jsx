import React from 'react'
import './Home.css'
import { NavLink } from "react-router-dom";
import myImage from '../../assets/txtshare.png';
import myImageipl from '../../assets/ipllivescore.png';
import myImageweather from '../../assets/wetherapp.png';
import myImageytsearch from '../../assets/ytsearch.png';
import myImageaisearch from '../../assets/aisearch.png';
import myImageonlineCompiler from '../../assets/onlineCompiler.png';
import myImagevplayer from '../../assets/vplayer.png';
import myImagecalculator from '../../assets/calculator.png';
import wordcounter from '../../assets/wordcounter.png';

function Home() {

  const tools = [
    {
      image: myImage,
      title: 'Text Sharing Web App',
      link: '/aitxt',
    },
    {
      image: myImageipl,
      title: 'IPL Live Score',
      link: '/ipl-live-score',
    },
    {
      image: myImageweather,
      title: 'Weather Application',
      link: '/weather-app',
    },
    {
      image: myImageytsearch,
      title: 'Youtube',
      link: '/youtube',
    },
    {
      image: myImageaisearch,
      title: 'Google Search',
      link: 'https://ai-search.netlify.app/',
    },
    {
      image: wordcounter,
      title: 'Word Counter',
      link: '/word-counter',
    },
    {
      image: myImageonlineCompiler,
      title: 'Online Compiler',
      link: '/',
    },
    {
      image: myImagevplayer,
      title: 'Video Player', //hidden key ["FunctionUp"] = 
      link: '/',
    },
    {
      image: myImagecalculator,
      title: 'Calculator',
      link: '/',
    },
    
  ];



  return (
    <div className='home_page'>
      <div className='hadding'>
        Daily Life Tools
      </div>
      <div className="grid-container">
        {tools.map(tool => (
          <div className="grid-item" key={tool.title}>
            <NavLink to={tool.link} >
              <img src={tool.image} alt={tool.title} />
              
            </NavLink>
          </div>
        ))}
      </div>

      <div className='home_aboutus'>
        <div className="main-container-about">
          <h1 className='heading'>Welcome to Ai Tools Hub</h1>
          <p className="description">Welcome to Toolshub, your go-to destination for a variety of useful tools that can make your life easier and more enjoyable. This website has been developed by <a href='https://ashishingle.netlify.app/' target='_blank' rel='noreferrer'><b>Ashish Ingle</b></a>, a passionate developer who wants to share his expertise with the world.</p>
          <p className="mission-statement">
            At Toolshub, you'll find a diverse range of tools that cater to different needs and interests. For instance, if you want to share text online with friends or colleagues, you can use our Text Sharing tool. It allows you to create and share text-based content quickly and easily, without any hassle.
            <br />
            <br />

            If you're a fan of cricket and want to stay updated on the latest IPL scores, we've got you covered as well. Our IPL Live Score tool gives you real-time updates on the match scores and other important details.
            <br />
            <br />

            For entertainment purposes, we offer a High-Rated Video Player that allows you to watch your favorite videos in high-quality format.
            <br />
            <br />

            Our Weather Application tool is perfect for those who want to stay informed about the weather conditions in their area or other parts of the world. It provides accurate and up-to-date weather information that can help you plan your day accordingly.
            <br />
            <br />

            If you're looking for an intelligent search engine, our AI Search Engine tool is the perfect choice. It uses advanced algorithms to deliver relevant search results that match your query.
            <br />
            <br />

            Last but not least, we offer a Calculator tool that can help you perform complex calculations quickly and accurately.</p>
          <p className="cta">Toolshub is a one-stop-shop for all your tool needs. Whether you're looking for productivity tools, entertainment tools, or informative tools, we've got something for everyone. So why wait? Explore our website today and start making your life easier and more enjoyable!</p>
        </div>
      </div>
    </div>
  )
}

export default Home