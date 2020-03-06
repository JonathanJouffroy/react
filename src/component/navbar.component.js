import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/Home">Tableau de bord</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Orders">
                                Commandes
                            </Nav.Link>
                            <Nav.Link href="/Products">
                               Produits
                            </Nav.Link>
                            <Nav.Link href="/Stats" >
                                Statistiques
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">
                                Accueil
                            </Nav.Link>
                            <Nav.Link href="/Contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

}

export default NavBar;