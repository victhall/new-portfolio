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
      {props.children}
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function ProjectModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
