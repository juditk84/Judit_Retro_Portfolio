import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
export default function PosterModal() {

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(true);


  const handleClose = () => {
    setModalShow(false);
    setTimeout(() => navigate("/"), 300)

  }
  const handleShow = () => setModalShow(true);

  return (
    <>      
      <Modal
      show={modalShow}
      onHide={handleClose}
      size="sm-3"
      aria-labelledby="contained-modal-title-vcenter"
      style={{color: "black"}}
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Judit K. / musician
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{backgroundColor: "black", textAlign: "center", padding: "0"}}>
        <img className="poster" src="./public/poster/poster.png" alt="" />
      </Modal.Body>
      {/* <Modal.Footer>
      <Button onClick={handleClose}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </>
  );
}