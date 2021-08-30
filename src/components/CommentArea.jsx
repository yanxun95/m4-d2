import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      console.log("title has changed!");
      console.log(prevProps.asin);
      console.log(this.props.asin);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjZiODJkNTI2MjAwMTViNmRjOTgiLCJpYXQiOjE2MjkyODgxMjAsImV4cCI6MTYzMDQ5NzcyMH0.XfRUnn6BFJPPRnEwvnQnjrk0oaXPSwwKyJlEGV6Wn9k",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({ comments: data });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div style={{ width: "30%" }}>
        <AddComment asin={this.props.asin}></AddComment>
        {this.state.comments.length > 0 && (
          <CommentList comments={this.state.comments}></CommentList>
        )}
      </div>
    );
  }
}

export default CommentArea;
