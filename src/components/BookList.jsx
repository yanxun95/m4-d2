import { Component } from "react";
import { Container, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    sreachBook: "",
    selectedBook: null,
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
        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="row" style={{ width: "70%" }}>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.sreachBook)
              )
              .map((b) => (
                <SingleBook
                  key={b.asin}
                  book={b}
                  selectedBook={this.state.selectedBook}
                  newSelectedBook={(asin) =>
                    this.setState({
                      selectedBook: asin,
                    })
                  }
                ></SingleBook>
              ))}
          </div>
          <CommentArea asin={this.state.selectedBook} />
        </div>
      </Container>
    );
  }
}

export default BookList;
