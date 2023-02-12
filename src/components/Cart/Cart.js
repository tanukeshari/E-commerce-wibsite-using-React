import React ,{useContext}from "react";
import { Button, Modal } from "react-bootstrap";

import CartContext from "../Store/CartContext";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const context=useContext(CartContext)

  const totalAmount= `${context.totalAmount.toFixed(2)}rs`

  const hasItems=context.products.length>0;

  const cartRemove=(ele)=>{
    context.removeItem(ele)
  }


  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        // backdrop={props.backdrop}
        keyboard={props.keyboard}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h2 style={{ marginLeft: "40%" }}>Cart</h2>
            <div>
              <h3
                style={{ display: "inline-block", textAlign: "left" }}
                className="m-4"
              >
                items
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  margin: "2.5rem",
                }}
              >
                title
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "right",
                  margin: "2.5rem",
                }}
              >
                price
              </h3>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight:'20rem',overflow:'scroll'}}  >
          {context.products.map((ele,index) => (
            <ul style={{ display: "flex"}} key={Math.random()}>
              <li style={{ listStyle: "none" }}>
                <span style={{ display: "flex" }} className="mt-lg-4">
                  <img src={ele.imageUrl} style={{ width: "20%" }} alt="items"></img>
                  <h4 style={{ width: "20%", marginLeft: "10%" }}>
                    {ele.title}
                  </h4>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "5%",
                      fontFamily: "fantasy",
                    }}
                  >
                    {ele.quantity}
                  </span>
                  <div style={{ marginLeft: "10px" }}>
                    <Button className="btn btn-danger p-2" onClick={()=>cartRemove(ele)}>Remove</Button>
                  </div>
                </span>
              </li>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div style={{textAlign:"center"}} className="m-3"><h3>TOTAL AMOUNT</h3>
          <h4 style={{color:"lightcoral"}}>{totalAmount}</h4>
          </div>
          <Button variant="secondary" onClick={props.onClick}>
            Close
          </Button>
         {hasItems && <Button variant="success">PURCHASE</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;