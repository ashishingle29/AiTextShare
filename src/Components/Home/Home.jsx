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
      title: 'Tool 2',
      link: '/',
    },
    {
      image: 'https://pbs.twimg.com/media/Fr9S0QQWAAAV_yh?format=png&name=900x900',
      title: 'Tool 3',
      link: '/',
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
    </div>
  )
}

export default Home