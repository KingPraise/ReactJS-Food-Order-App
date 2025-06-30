// Import Fragment for grouping elements without extra nodes, and ReactDOM for portals
import { Fragment } from "react";
import ReactDOM from "react-dom";

// Import CSS module for styling the modal components
import classes from "./Modal.module.css";

// Backdrop component: renders a semi-transparent background and handles click to close modal
const Backdrop = (props) => {
  return (
    // The backdrop div covers the screen; clicking it triggers the onClose handler
    <div className={classes.backdrop} onClick={props.onClose} />
  );
};

// ModalOverlay component: renders the modal content box
const ModalOverlay = (props) => {
  return (
    // The modal div contains the content, styled via CSS modules
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Get the DOM element where the modal will be rendered via portal
const portalElement = document.getElementById("overlays");

// Modal component: combines Backdrop and ModalOverlay, renders them into portalElement
const Modal = (props) => {
  // If portalElement is not found, render nothing
  if (!portalElement) return null;
  return (
    // Use Fragment to group Backdrop and ModalOverlay without extra DOM nodes
    <Fragment>
      {/* Render Backdrop into portalElement; clicking it closes the modal */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {/* Render ModalOverlay (modal content) into portalElement */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

// Export Modal as default export
export default Modal;
