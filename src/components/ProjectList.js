import Project from './Project';
import classes from './ProjectList.module.css';
import sanityClient from '../client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';

export default function ProjectList() {
  const [projectData, setProjectData] = useState([]);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'project'] { 
      title,
      image,
      shortDesc,
      longDesc,
      tech,
      url,
      icon,
      github
      }`).then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <div className={classes['project-list']}>
      {projectData.map((project, index) => {
        return <Project
          index={index}
          key={project.id}
          title={project.title}
          icon={urlFor(project.icon).url()}
          image={project.image}
          shortDesc={project.shortDesc}
          longDesc={project.longDesc}
          tech={project.tech}
          url={project.url}
          github={project.github}
        />
      })}
    </div>
  )
}
