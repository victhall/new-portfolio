import classes from './Project.module.css';
import ProjectModal from '../UI/ProjectModal'
import { useState } from 'react';

export default function Project(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  const projectDetails = <>
    <img src={props.image} />
    <h1>{props.title}</h1>
    <p>{props.shortDesc}</p>
    <button onClick={closeModal}>Close</button>
    <h2>Tech</h2>
    <p>{props.tech}</p>
    <img src={props.image} />
    <p>{props.longDesc}</p>
  </>

  return (
    <>
      <div className={classes['project-outer__container']}>
        <div className={classes.projects}>
          <img src={props.image} />
          <div className={classes['project-inner__container']}>
            <div className={classes['project__details']}>
              <h2 className={classes['project__title']}>{props.title}</h2>
              <p className={classes['project-short__description']}>{props.shortDesc}</p>
            </div>
            <button onClick={openModal}>Details</button>
          </div>
        </div>
      </div>
      {isModalOpen && <ProjectModal>{projectDetails}</ProjectModal>}
    </>
  )
}