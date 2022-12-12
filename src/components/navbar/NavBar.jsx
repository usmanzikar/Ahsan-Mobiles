import React from "react";
import { Navbar, Nav, Form,Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg" sticky="top">
        <Navbar.Brand href="#home">AHSAN MOBILES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#offers">Top Offers</Nav.Link>
            <Nav.Link href="#oneplus">OnePlus</Nav.Link>
            <Nav.Link href="#brands">Iphones</Nav.Link>
            <Nav.Link href="#brands">Other Models</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#sign">Sign IN/UP</Nav.Link>
          </Nav>
          <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
