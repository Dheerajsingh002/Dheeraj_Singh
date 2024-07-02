import React from 'react'

function ProjectCard({src,link,p}) {
  return (
    <a
    href={link}
    target="_blank"
  >
    <img src={src} alt={`${p} logo`} className="hover" />
    <p>{p}</p>
  </a>
  )
}

export default ProjectCard