import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function Intro() {

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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{color: "black"}}
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Judit K. / musician
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{border: "solid red 3px", color: "pink", backgroundColor: "black", textAlign: "center", padding: "0"}}>
          <h4>Welcome to my portfolio!</h4>
          
          <h5>I'm Judit! Fullstack dev, musician, writer and lgtbiq+ rights activist.</h5> <br />
          <p style={{fontSize: 15}}>To know me better, you'll have to enter 90s kid mode and click around. <br /><br />
          
          {/* Point&Click games back then used to feature some kind of verb menu that enabled the player to 
          interact with the scene by combining verb buttons and object clicks. They were story-rich games with a sharp sense of humour
          and challenging puzzles. This is just a tribute; there's no crazy puzzles here... it's tempting to make it cryptic but
          I want to be hired as a Fullstack dev eventually. <br /> */}
          LOOK AT the screen to figure out if you need to hire me or block me on your social networks. <br /><br /> </p>
          <p style={{fontSize: 13}}>Portfolio built by Judit Calero in 2024 using React, CSS, React-Three/Fiber & Drei, Express.js, Sequelize, Pixelorama and love for retro pixelart. <br /><br /></p>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      </>
    );
}
