import React from 'react'
import DevIcon from 'devicon-react-svg'


const devIconStyle = {
  fill: '#69a5a4',
  width: '80px'
}

const ProjectCard = ({ title, image, blurb, url }) => {

  const handleClick = (event) => {
    event.preventDefault()
    window.open(url.project, '_blank')
  }

  return (
    <section id='projectCard' className="">
      <div className='border'>
        <h1 className="title">{title}</h1>
        <div className="columns">
          <div className="column section has-text-left">
            {/* <h2 className="subtitle">task:</h2><small>{blurb.task}</small><br/> */}
            <h2 className="subtitle">process:</h2><p>{blurb.process}</p><br/>
            <h2 className="subtitle">tech used:</h2>
            <div>{blurb.used.map(item => <span key={item}><p>~ {item}</p></span>)}</div><br/>
          </div>
          <div className="column is-hidden-touch">
            <img src={image} alt={`${title} screenshot`} />
          </div>
        </div>
        <div className="buttons is-centered">
          <div className="">
            <DevIcon icon='github' wordmark="true" style={devIconStyle} onClick={(event) => handleClick(event)}/>
            <small>View the code on Github</small>
          </div>

          <button className="button" onClick={(event) => handleClick(event)}>Open</button>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard