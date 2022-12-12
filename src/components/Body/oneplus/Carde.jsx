import React from "react";
import { Card, Button} from "react-bootstrap";
import "./card.css";
const Carde = (props) => {
  return (
      <>
    
    <div className='container my-5'>

      <Card>
        <Card.Img className='top-img' variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>
            <h3>{props.title}</h3>
          </Card.Title>
          <h4>Brand: <span>{props.brand}</span></h4>
          <Card.Text>
            <h4>Details:</h4>
            <p>
              Condition: &nbsp;{props.condition}
            </p>
            <p>
              Ram:&nbsp;{props.ram}
            </p>
            <p>
              Storage:&nbsp;{props.storage}
            </p>
            <p>
              Display:&nbsp;{props.display}
            </p>
            <p>
              Battery:&nbsp;{props.battery}
            </p>
            <p>
              Color:&nbsp;{props.colors}
            </p>
          </Card.Text>
          <h4>
            Price: &nbsp;&nbsp;<span>{props.price} Rs</span>
          </h4>
          <h4>
            Rating: &nbsp; 
            <span style={{ color: "orange", fontSize:'14px' }}>
              {props.star1} {props.star2} {props.star3} {props.star4}{" "}
              {props.star5}
            </span>
          </h4>
          <a href={props.link}>
            <Button variant="primary">Buy on OLX</Button>
          </a>
        </Card.Body>
      </Card>
      </div>
      
    </>
  );
};

export default Carde;
