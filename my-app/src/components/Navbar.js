import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';

import { faBars, faBox, faList, faTruckLoading, faListAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar bg="Blue" variant="Blue" expand="lg">
        <Link to="#" className="menu-bars">
          
        </Link>
        <Navbar.Brand href="#home">FOURNITURE SCOLAIRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/stock-form">
             
              <span>ACCEUIL</span>
            </Nav.Link>
            <Nav.Link href="/stock-list">
              
              <span> LISTE STOCK </span>
            </Nav.Link>
            <Nav.Link href="/stock-out-form">
             
              <span>ACTION DE SORTIE</span>
            </Nav.Link>
            <Nav.Link href="/stock-out-list">
             
              <span>PRODUIT SORTIE</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    </>
  );
};

export default Navigation;
