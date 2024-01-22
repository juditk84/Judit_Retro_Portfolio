import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useInteraction from '../hooks/useInteraction';

export default function Intro() {

    const {firstRun, setFirstRun} = useInteraction();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(true);
  
    const handleClose = () => {
      setModalShow(false);
      setTimeout(() => navigate("/"), 300)
      setFirstRun(false);
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
        centered>
        <Modal.Body style={{border: "solid red 3px", color: "pink", backgroundColor: "black", textAlign: "center", padding: "0"}}>
          <h4>Welcome to my portfolio!</h4> <br/>
          
          <h5>I'm Judit! Fullstack dev, musician, writer and lgtbiq+ rights activist.</h5> 
          <p style={{fontSize: 15}}>To know me better, you'll have to enter 90s kid mode and click around. <br /><br />
          
          LOOK AT the screen to figure out if you need to hire me or block me on your social networks. <br /><br /> <br /></p>
          <p style={{fontSize: 13}}>Portfolio built by Judit Calero in 2024 using React, CSS, React-Three/Fiber & Drei, Express.js, Sequelize, Pixelorama and love for retro pixelart. <br /><br /></p>
          <Link to="https://www.linkedin.com/in/judit-calero-timoneda-77ba06287/" target="_blank">LinkedIn</Link> // judit.calero84@gmail.com // <Link to="https://github.com/juditk84" target="_blank">Github</Link>
        </Modal.Body>
      </Modal>
      </>
    );
}
