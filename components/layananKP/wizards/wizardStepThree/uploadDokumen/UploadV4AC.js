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

function UploadV4AC() {
  return (
    <Card>
      <Card.Body>
       
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>Realisasi SKP 1 tahun terakhir*</Col>
            <Col className="paddingLeft">SK KP Perorangan/SK Petikan Terakhir*</Col>
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

          {/* Judul 2 */}
          <Form.Row className="Step-3">
            <Col md={5}>Ijazah*</Col>
            <Col className="paddingLeft">Transkrip nilai*</Col>
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
            <Col md={5}>Akreditasi Program Studi*</Col>
            <Col className="paddingLeft">STL ujian KP Penyesuaian Ijazah*</Col>
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

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>SK Tugas Belajar / Izin Belajar*</Col>
            <Col className="paddingLeft">Uraian Tugas yang Ditetapkan Pejabat Setingakat Eselon II*</Col>
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

export default UploadV4AC;