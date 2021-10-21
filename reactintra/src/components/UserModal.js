import { Row, Col } from "react-bootstrap";

const UserModal = ({ user, onClick }) => {
  return (
    <Row
      onClick={() => onClick(user)}
    >
      <Col xs={9}>
        <li>
          {" "}
          {user.firstname}, {user.lastname}{" "}
        </li>
      </Col>
    </Row>
  );
};

export default UserModal;
