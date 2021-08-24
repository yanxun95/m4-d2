import React from "react";
import { Card, Col } from "react-bootstrap";
import historys from "../data/history.json";

function release() {
  return (
    <div className="container d-flex">
      <div className="row">
        {historys.map((history) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={history.img} />
              <Card.Body>
                <Card.Title>{history.title}</Card.Title>
                <Card.Text>&euro; {history.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

export default release;
