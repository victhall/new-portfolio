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

      {isModalOpen && <ProjectModal
      onCloseModal={closeModal} 
      title={props.title}
      image={props.image}
      shortDesc={props.shortDesc}
      longDesc={props.longDesc}
      tech={props.tech}
      />}
    </>
  )
}