import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom'




export const Perfil = () => {

  const { logout } = useAuth0();

  //AUTENTICACION CON AUTH0 ---- 1
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  //VALIDAR FORMULARIO DE INFO DE PERFIL ---- 2
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // ---------------- 2

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // ---------------- 1

  return (
    isAuthenticated && (
      <>
          <div>
            <center>
              <img style={{
                margin:40,
                width:"8rem",
                borderRadius:"20px",
                textAlign: "center"
              }} src={user.picture} alt={user.name} />
            </center>
          </div>

          
            <Container style={{paddingBottom:135}}>
              <Row className="justify-content-md-center ">
                <Col>
                  <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                      <button className="nav-link active" id="v-pills-historial-tab" data-bs-toggle="pill" data-bs-target="#v-pills-historial" type="button" role="tab" aria-controls="v-pills-historial" aria-selected="true">Historial</button>

                      <button className="nav-link" id="v-pills-info-tab" data-bs-toggle="pill" data-bs-target="#v-pills-info" type="button" role="tab" aria-controls="v-pills-info" aria-selected="false">Informaci??n</button>

                      <button onClick={() => logout({ returnTo: window.location.origin})} className="nav-link" id="v-pills-cerrarsesion-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cerrarsesion" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Desloguearse</button>
                      
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">

                      <div className="tab-pane fade show active" id="v-pills-historial" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <div >
                        
                          <Table>
                            <thead>
                              <tr>
                                <th>Pedido n??</th>
                                <th>Fecha</th>
                                <th>Monto Total</th>
                                <th>Estatus</th>
                                <th>Ver</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Tasdadasdasdasdadas</td>
                                <td>adadadasdasdasdasdasd</td>
                                <td>asdadasd</td>
                                <td><NavLink to='/pedido1'>Ver pedido</NavLink></td>
                                
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                
                              </tr>
                            </tbody>
                          </Table>
                          
                        </div>
                        
                      </div>

                      <div className="tab-pane fade" id="v-pills-info" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      {/* FORMULARIO INFO DE USUARIO */}
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
          {/* FILA 1 */}
                          {/* NOMBRE */}
                          <Form.Group as={Col} lg="6" controlId="validationCustom01">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=""
                              defaultValue={user.name}
                            />
                            <Form.Control.Feedback>Es v??lido</Form.Control.Feedback>
                          </Form.Group>

                          {/* APELLIDO */}
                          <Form.Group as={Col} lg="6" controlId="validationCustom02">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=""
                              defaultValue=""
                            />
                            <Form.Control.Feedback>Es v??lido</Form.Control.Feedback>
                          </Form.Group>                        
                        </Row>
            {/* FILA 2 */}
                        <Row className="mb-3">

                          {/* CORREO */}
                          <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="Ingresa tu email"
                              defaultValue={user.email}
                            />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Por favor escribre un correo v??lido.
                            </Form.Control.Feedback>
                          </Form.Group>

                        </Row>

            {/* FILA 3 */}
                        <Row className="mb-3">
                          {/* DIRECCION */}
                          <Form.Group as={Col} md="9" controlId="validationCustom04">
                            <Form.Label>Direcci??n</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=""
                              defaultValue=""
                            />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo Obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* DEPARTAMENTO, ETC */}
                          <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Nro, Dpto, etc</Form.Label>
                            <Form.Control type="text" placeholder="State" />
                          </Form.Group>
                        </Row>  

            {/* FILA 4 */}  
                        <Row className="mb-3">
                          {/* DISTRITO */}
                          <Form.Group as={Col} md="4" controlId="validationCustom08">
                            <Form.Label>Distrito</Form.Label>
                            <Form.Control type="phone" placeholder="" required />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* CIUDAD */}
                          <Form.Group as={Col} md="4" controlId="validationCustom06">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="" required />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* PAIS */}
                          <Form.Group as={Col} md="4" controlId="validationCustom07">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control type="text" placeholder="" required />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
            {/* FILA 5 */}  
                        <Row className="mb-3">
                          {/* CODIGO POSTAL */}
                          <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>Codigo Postal</Form.Label>
                            <Form.Control type="phone" placeholder="" required />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* TELEFONO */}
                          <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="phone" placeholder="" required />
                            <Form.Control.Feedback>Es v??lido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Campo obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>




                        <Form.Group className="mb-3">
                          <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                          />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                      </Form>
                      </div>

                      <div className="tab-pane fade" id="v-pills-cerrarsesion" role="tabpanel" aria-labelledby="v-pills-messages-tab">Adios</div>
                      
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          
      </>
    )
    
  );
  
};

