import React from "react";
import { Button, Modal } from "react-bootstrap";

function NewModal({
  modalTitle,
  handleClose,
  onSubmit,
  show,
  children,
  size,
  buttons,
  props,
}) {
  return (
    <Modal size={size} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {buttons ? (
          buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : (
          <Button
            variant="primary"
            {...props}
            className="btn-md"
            onClick={onSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;
