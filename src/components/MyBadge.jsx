import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <div className="container">
      <h3>
        Example heading <Badge variant={props.color}>{props.text}</Badge>
      </h3>
    </div>
  );
};

export default MyBadge;
