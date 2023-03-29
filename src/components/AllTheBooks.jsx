import { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import books from "../books/horror.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid className="d-flex ">
        <Container className="container" fluid style={{ backgroundColor: "#d9a162" }}>
          <h2 className="fw-light py-5">Take a glance at our collection of Horror novels🧟‍♀️</h2>
          <Row xs={1}>
            {books.map((book, index) => (
              <Col key={index} className="pb-5 px-5">
                <Card id="card">
                  <Card.Img className="img-fluid" variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>{book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="container" fluid style={{ backgroundColor: "#d9a162" }}>
          <h2 className="fw-light py-5">Take a glance at our collection of Horror novels🧟‍♀️</h2>
          <Row xs={1}>
            {books.map((book, index) => (
              <Col key={index} className="pb-5 px-5">
                <Card id="card">
                  <Card.Img className="img-fluid" variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>{book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AllTheBooks;
