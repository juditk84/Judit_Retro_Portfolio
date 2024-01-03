import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Fullstack from '../components/fullstack';
import Musician from '../components/musician';
import Work from '../components/work';

export default function screen() {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(true);
    const [selectedTab, setSelectedTab] = useState([{id: "Fullstack", selected: false, component: <Fullstack key="1"/>}, 
                                                    {id: "Musician", selected: true, component: <Musician key="2"/>},
                                                    {id: "Work", selected: false, component: <Work key="3"/>}]);
   
    const handleClose = () => {
      setModalShow(false);
      setTimeout(() => navigate("/"), 300)
  
    }
    
    const handleShow = () => setModalShow(true);
    
    function handleTabClick(event){
        event.preventDefault();
        console.log(event.target.id)
        const updatedSelectedTabs = selectedTab.map((tab) => {
            
            if(tab.id === event.target.id){
                if(tab.selected === false){
                    return {...tab, selected: true}
                }
                else{
                    return {...tab}
                } 
            }else 
            return {...tab, selected: false}})

        setSelectedTab(updatedSelectedTabs)
    }

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
        <Modal.Body className="screen_modal"style={{backgroundColor: "black", textAlign: "center", padding: "0"}}>
          
            <div className="window" style={{width: "800px"}}>
                <div className="title-bar">
                    <div className="title-bar-text">A Window With Stuff In It</div>
                    <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                    </div>
                </div>

                <div className="window-body">
                    <p>Hello, world!</p>

                    <menu role="tablist">
                        {selectedTab.map((element, i) => <li key = {i} onClick={handleTabClick} id={element.id} role="tab" aria-selected={element.selected} className="tab_title">{element.id}</li>)}
                    </menu>
                    <div className="window" role="tabpanel">
                        <div className="window-body">
                            {selectedTab.filter(tab => tab.selected === true).map((tab, i) => tab.component)}
                        </div>
                    </div>
                </div>

            </div>

        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      </>
    );
}
