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

  const projectDetails =

<div className={classes['outer-details__container']}>
    <div className={classes['project-details']}>
      <div className={classes['details-img']}>
        <img src={props.icon} />
      </div>

        <div className={classes['title-desc']}>
          <h1>{props.title}</h1>
          <p>{props.shortDesc}</p>
        </div>

        <div className={classes['close-btn']}>
          <button onClick={closeModal}>Close</button>
        </div>

      </div>

      <h2 className={classes['tech-title']}>Tech Stack</h2>
      <p className={classes['tech-stack']}>{props.tech}</p>

      <div>
        <img className={classes['app-img']} src={props.image} />
      </div>

      <div className={classes.longDesc}>
        <p>{props.longDesc}</p>
      </div>

<button className={classes['visit-btn']}>Visit</button>
    </div>

  

  return (
    <>
      <div className={classes['project-outer__container']}>
        <div className={classes.projects}>
          <img src={props.icon} />
          <div className={classes['project-inner__container']}>
            <div className={classes['project__details']}>
              <h2 className={classes['project__title']}>{props.title}</h2>
              <p className={classes['project-short__description']}>{props.shortDesc}</p>
            </div>
            <div className={classes.btn}>
              <button onClick={openModal}>Details</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProjectModal onCloseModal={closeModal}>{projectDetails}</ProjectModal>}
    </>
  )
}