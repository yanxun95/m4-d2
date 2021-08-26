import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <Alert className="container" variant="danger">
      <h2>{props.text}</h2>
    </Alert>
  );
};

export default WarningSign;
