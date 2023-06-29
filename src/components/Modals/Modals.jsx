import { Button, Modal } from 'react-bootstrap';

const Modals = ({ show, handleClose, mensaje }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mensaje.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className={`form-label`}>Autor</label>
              <input className={`form-control`} type='text' placeholder={mensaje.autor} />
            </div>
            <div>
              <label className={`form-label`}>Frase</label>
              <input className={`form-control`} type='text'  placeholder={mensaje.frase}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default Modals;