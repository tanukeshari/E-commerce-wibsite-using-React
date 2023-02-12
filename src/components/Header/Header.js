import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";

const Header = () => {
const context=useContext(CartContext)
let quantity=0;
context.products.forEach((product)=>{
  quantity=quantity+Number(product.quantity)
})
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
   
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">
          <Nav.Item className="m-3">
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Nav.Link>Store</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Button variant="outline-info" onClick={handleShow}>Cart <span>{quantity}</span>{" "}
      </Button>
      <Cart
        show={show}
        onHide={handleClose}
      //   backdrop="static"
        keyboard={false}
        onClick={handleClose}
      />
    </Navbar>
  );
};

export default Header;