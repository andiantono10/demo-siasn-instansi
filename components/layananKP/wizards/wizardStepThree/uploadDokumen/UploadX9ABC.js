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
    Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadX9ABC() {    
    return (
        <Card>
        <Card.Body>
         
        <main className={styles.main}>
            <section className={styles.container}>
                <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Realisasi SKP 1 Tahun terakhir*</Col>
                        <Col className="paddingLeft">SK Jabatan (HAKIM/PANITERA)*</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>SK KP Perorangan/SK Petikan*</Col>
                        <Col className="paddingLeft">SK KP Perorangan/SK Petikan Terakhir*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Surat Pengantar Provinsi (Kolektif)*</Col>
                        <Col className="paddingLeft">Surat Pengantar Instansi (Kolektif)*</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Surat Pengantar Keluar Pertek KP (Kolektif)*</Col>
                        <Col className="paddingLeft">Pertek*</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    
                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Surat Pembatalan Pertek</Col>
                    </Form.Row>
                    
                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form>
                                <Form>
                                    <Form.File
                                        id="custom-file"
                                        label="Pilih Berkas"
                                        data-browse="Pilih"
                                        custom
                                    />
                                </Form>
                            </Form>
                        </Col>
                    </Form.Row>
                    <br /><div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                </div>
            </section>
        </main>
     
        </Card.Body>
      </Card>
      );
}

export default UploadX9ABC;
