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
  FormControl,
  Card,
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function UploadW7A() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}
          <Form><Card><Card.Body>
          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}> Realisasi SKP 2 Tahun Terakhir*</Col>
            <Col className="paddingRD2">SK KP Perorangan/SK Petikan Terakhir*</Col>
          </Form.Row>

          {/* Input 1 */}
          <Form.Row className="Step-3">
          <Col md={5}>
          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
            <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          {/* Judul 2 */}
          <Form.Row className="Step-3">
            <Col md={5}>SK Tugas Belajar / Izin Belajar*</Col>
            <Col className="paddingRD2">Ijazah*</Col>
          </Form.Row>

          {/* Input 2 */}
          <Form.Row className="Step-3">
          <Col md={5}>
          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
            <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>
          {/* Judul 3 */}
          <Form.Row className="Step-3">
            <Col md={5}>Transkrip Nilai*</Col>
            <Col className="paddingRD2">Akreditasi Program Studi*</Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3">
          <Col md={5}>
          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
            <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>Uraian Tugas yang Ditetapkan Pejabat Setingkat Eselon II*</Col>
          </Form.Row>

          {/* Input 4 */}
          <Form.Row className="Step-3">
          <Col md={5}>
          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <div className="input-group">
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </div>
                        </a>
            </Col>
            <Col md><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>
          <br />
          </Card.Body></Card></Form>
        </div>
      </section>
    </main>
  );
}

export default UploadW7A;
