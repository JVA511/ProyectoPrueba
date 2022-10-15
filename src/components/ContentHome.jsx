import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../imagenes/card1.png";
import img2 from "../imagenes/card2.png";
import img3 from "../imagenes/card3.png";
import { FaArrowDown } from 'react-icons/fa'
import {IconContext} from 'react-icons';
import Alert from 'react-bootstrap/Alert';


export const ContentHome = () => {
    
     

  return (
    <>
           
        <h1 style={{textAlign:"center", paddingBottom:0, margin:10}}>
        <IconContext.Provider value={{ size:'35px'}} >
            
                <Alert style={{marginTop:40, marginBottom:50}} variant="info">
                <h1>
                <FaArrowDown/>  PRODUCTOS MAS VENDIDOS   <FaArrowDown/>
                </h1>
                </Alert>            
            
        </IconContext.Provider>
        </h1>
        <Container>
            <Row className="justify-content-sm-center">
                <Col sm lg="3">
                    <Card style={{ width: '18rem', margin:10}}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem', margin:10}}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem', margin:10}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>RTX </Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem', marginBottom:10}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
            </Row> 

            <Row className="justify-content-md-center">
                <Col sm lg="3">
                    <Card style={{ width: '18rem', marginBottom:10}}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem', marginBottom:10}}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
            </Row>   

            <Row className="justify-content-md-center">
                <Col sm lg="3">
                    <Card style={{ width: '18rem', marginBottom:20}}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
                <Col sm lg="3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>              
                </Col>
            </Row>

        </Container>
        
            
      
        
    </>
  )
}
