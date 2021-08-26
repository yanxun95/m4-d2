import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

import "./SingleBook.css";

class SingleBook extends Component {
  state = {
    selected: false,
    comment: false,
  };

  render() {
    return (
      <div>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          className={this.state.selected ? "book-card1" : "book-card"}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>&euro; {this.props.book.price}</Card.Text>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <CommentArea asin={this.props.book.asin}></CommentArea>
        )}
      </div>
    );
  }
}

export default SingleBook;
