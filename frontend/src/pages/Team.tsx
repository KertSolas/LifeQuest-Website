import { Row, Col, Card } from "react-bootstrap"

export function Team() {
  return (
    <>
      <h1>OUR TEAM</h1>
      <Row>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/jiv.png" alt="" />
            <Card.Body>
              <Card.Title>Jiverle Dela Cruz</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/jay.png" alt="" />
            <Card.Body>
              <Card.Title>Kyle Lomigo</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/kert.png" alt="" />
            <Card.Body>
              <Card.Title>Kert Jem Solas</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/jay.png" alt="" />
            <Card.Body>
              <Card.Title>Jay Bandiola</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/cloyd.png" alt="" className="roundedCircle" />
            <Card.Body>
              <Card.Title>Edmar Cloyd Jagunap</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/basil.png" alt="" />
            <Card.Body>
              <Card.Title>Basil Amso</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sm">
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="/images/ferj.png" alt="" />
            <Card.Body>
              <Card.Title>Ferj Dave Torred</Card.Title>
              <Card.Text>
                Sofware Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div>
        <h2 className="aboutus"> ABOUT US</h2>
        <p className="paragraph">Happy New Year!</p>
      </div>

    </>
  );
}

export default Team