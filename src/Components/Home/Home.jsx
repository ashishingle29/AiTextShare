import React from 'react'
import './Home.css'

function Home() {

  const tools = [
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Text Sharing Web App',
      link: '/aitxt',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Weather Application',
      link: '/weather-app',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Youtube',
      link: '/youtube',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Tool 4',
      link: '/',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Tool 5',
      link: '/',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png',
      title: 'Tool 6',
      link: '/',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png',
      title: 'Tool 6',
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
            <a href={tool.link}>
              <img src={tool.image} alt={tool.title} />
            </a>
            <h2>{tool.title}</h2>
          </div>
        ))}
      </div>
  
      <div className='home_aboutus'>
        <div class="main-container-about">
          <h1>Welcome to Ai Tools Hub</h1>
          <p class="description">A comprehensive suite of free SEO tools designed to help website owners and digital marketers improve their online visibility and drive more traffic to their sites. Our collection of tools includes everything from keyword research and link analysis to website optimization and content analysis, all aimed at providing you with the insights and data you need to make informed decisions about your website.</p>
          <p class="mission-statement">Unlike other SEO tool websites, we've made it our mission to provide high-quality, reliable tools that are easy to use and accessible to everyone. Whether you're a seasoned SEO pro or just getting started, our tools are designed to help you optimize your website for search engines and drive more organic traffic to your site.</p>
          <p class="cta">At <b>Ai Tools Hub</b>, we're committed to helping our users achieve their SEO goals and succeed online. That's why all of our tools are completely free to use, with no hidden costs or fees. So why wait? Start exploring our collection of SEO tools today and see how we can help you take your website to the next level!</p>
        </div>
      </div>
    </div>
  )
}

export default Home