import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Card, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
function UploadY2A() {
  return (
    <Card>
      <Card.Body>
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.components}>
              {/* Step 4-3 */}

              {/* Judul 1 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>Penilaian Prestasi Kerja/DP-3 2 tahun terakhir*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
                <Col md={5}>
                  <Form.Label>SK KP Terakhir*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
              </Form.Row>

              {/* Judul 2 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>SK jabatan Struktural*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
                <Col md={5}>
                  <Form.Label>SK Pelantikan*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
              </Form.Row>

              {/* Judul 3 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>Surat Pengantar Instansi (Kolektif) *</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
                <Col md={5}>
                  <Form.Label>Surat Pengantar Provinsi (Kolektif)*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
              </Form.Row>

              {/* Judul 4 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>Pertek*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
                <Col md={5}>
                  <Form.Label>Surat Pembatalan Pertek</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaCheckCircle size="1rem" color="green" />
                </Col>
              </Form.Row>

              {/* Judul 5 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>Surat Pengantar Keluar Pertek KP (Kolektif)*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
                <Col md={5}>
                  <Form.Label>SK KP Perorangan/Sk Petikan</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaCheckCircle size="1rem" color="green" />
                </Col>
              </Form.Row>

              {/* Judul 6 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>surat Penujukan PLT dari PPK</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaCheckCircle size="1rem" color="green" />
                </Col>
                <Col md={5}>
                  <Form.Label>Hasil 3 Nama yang lolos seleksi JPT*</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaTimesCircle size="1rem" color="red" />
                </Col>
              </Form.Row>

              {/* Judul 7 */}
              <Form.Row className="Step-3 align-items-center">
                <Col md={5}>
                  <Form.Label>Berita Acara Sumpah/Janji/Pelantikan Jabatan atau SPMT</Form.Label>
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
                <Col md={1}>
                  <br></br>
                  <FaCheckCircle size="1rem" color="green" />
                </Col>
              </Form.Row>
              <br />
            </div>
          </section>
        </main>
      </Card.Body>
    </Card>
  );
}

export default UploadY2A;
