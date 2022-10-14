import classes from './Project.module.css';
import ProjectModal from '../UI/ProjectModal';
import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

export default function Project(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source)
  };

  function openModal() {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false)
  };

  const projectDetails =
    <div className={classes['outer-details__container']}>
      <div className={classes['project-details']}>
        <div className={classes['details-img']}>
          <img className={classes['project-icon']} src={props.icon} alt='Project Home UI' />
        </div>
        <div className={classes['title-desc']}>
          <h1>{props.title}</h1>
          <p>{props.shortDesc}</p>
        </div>
        <div className={classes['close-btn']}>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
      <h2 className={classes['tech-title']}>TECH</h2>
      <div className={classes['tech-container']}>
        {props.tech.map((item) => {
          return <p className={classes['tech-stack']}>{item}</p>
        })}
      </div>
      <div className={classes['img-container']}>
        {props.image.map((item) => {
          return <img key={item.key} className={classes['app-img']} src={urlFor(item.asset._ref).url()} alt='Project screenshots of home UI' />
        })}
      </div>
      <div className={classes.longDesc}>
        <p>{props.longDesc}</p>
      </div>
      <div className={classes['detail-btns']}>
      <a href={props.url} target="_blank" rel='noreferrer'><button className={classes['visit-btn']}>Visit Web</button></a>
      <a href={props.github} target="_blank" rel='noreferrer'><button className={classes['visit-btn']}>View Source</button></a>
    </div>
    </div>

  return (
    <>
      <div className={classes['project-outer__container']}>
        <div className={classes.projects}>
          <img className={classes['project-icon']} src={props.icon} alt='Project UI screenshot' />
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
        {(props.index === 0 || props.index === 1) && <hr size=".5" className={classes['project-bottom__border']} />}
        {(props.index === 2) && <hr size=".5" className={classes['project-bottom__border3']} />}
      </div>
      {isModalOpen && <ProjectModal onCloseModal={closeModal}>{projectDetails}</ProjectModal>}
    </>
  )
}