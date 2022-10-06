import * as ReactDOM from "react-dom";
import classes from './Modal.module.css'

function Backdrop(props) {
  return (
    <div className={classes.backdrop}></div>
  );
}

function ModalOverlay(props) {
  return (
    <div className={classes['project-details__container']}>
      <img src={props.image}/>
      <h1>{props.title}</h1>
      <p>{props.shortDesc}</p>
      <button onClick={props.onCloseModal}>Close</button>
      <h2>Tech</h2>
      <p>{props.tech}</p>
      <img src={props.image} />
      <p>{props.longDesc}</p>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function ProjectModal(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay
    onCloseModal={props.onCloseModal} 
          title={props.title}
          image={props.image}
          shortDesc={props.shortDesc}
          longDesc={props.longDesc}
          tech={props.tech}
    />, portalElement)}
    </>
  )
}
