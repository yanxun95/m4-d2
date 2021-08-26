import { Component } from "react";
import { Container, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    sreachBook: "",
  };

  render() {
    return (
      <Container className="mt-5">
        <Form>
          <Form.Group>
            <Form.Label>Search book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the book that you want to search"
              value={this.state.sreachBook}
              onChange={(e) => this.setState({ sreachBook: e.target.value })}
            />
          </Form.Group>
        </Form>
        <div className="container d-flex">
          <div className="row">
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.sreachBook)
              )
              .map((b) => (
                <SingleBook key={b.asin} book={b}></SingleBook>
              ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default BookList;
