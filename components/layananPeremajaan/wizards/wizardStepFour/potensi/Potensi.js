import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Checkbox,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function VerifikasiData() {
  return (
    <>
      {/* Component input detail */}
      <div className='wizard__inputDetail mb-3'>
        <div>
          <Tabs
            defaultActiveKey='home'
            transition={false}
            id='noanim-tab-example'>
            <Tab eventKey='home' title='EDIT DATA'>
              {/*Form*/}
              <div>
                <Row>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Kemampuan Intelektual</Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Kecerdasan Emosional</Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <div className='w-100'></div>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='MarginLeft'>
                            <Form.Group as={Col}>
                              <Form.Label>
                                <br />
                                Kemampuan Interpersonal
                              </Form.Label>
                              <Form.Control
                                type='text'
                                placeholder=''
                                disabled
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='MarginLeft'>
                            <Form.Group as={Col}>
                              <Form.Label>
                                Kemampuan Belajar Cepat dan Mengembangkan Diri
                              </Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <div className='w-100'></div>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Kesadaran Diri</Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>
                                Motivasi dan Komitmen Talenta
                              </Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <div className='w-100'></div>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>
                                Kemampuan Berpikir Kritis dan Strategis
                              </Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col></Col>
                  <div className='w-100'></div>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>
                                Kemampuan Menyelesaikan Masalah
                              </Form.Label>
                              <Form.Control type='text' disabled />
                            </Form.Group>
                          </Col>
                          <Col>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </Tab>
            {/*TAB Dokumen Pendukung*/}
            <Tab eventKey='profile' title='DOKUMEN PENDUKUNG'>
              <Container>
                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>SK Peremajaan</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>

                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen PerTek</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>
              </Container>
            </Tab>
            {/*TAB Status Data*/}
            <Tab eventKey='contact' title='STATUS DATA'>
              <div>
                <br />
                <h4 className='h4-tab'>View Status Validasi</h4>
                <br />
                <Table striped bordered hover responsive='sm'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Kondisi</th>
                      <th>Status</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Input Data</td>
                      <td>
                        <Form.Check size='' type='checkbox' />
                      </td>
                      <td>OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Upload Dokumen</td>
                      <td>
                        <Form.Check size='' type='checkbox' />
                      </td>
                      <td>OK</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default VerifikasiData;
