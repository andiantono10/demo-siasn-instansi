import {
  striped,
  bordered,
  hover,
  Table,
  responsive,
  Form,
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function PindahInstansi() {
  return (
    <>
      <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
        <Tab eventKey='editdata' title='Edit Data'>
          <Card>
            <Card.Body>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Instansi</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                    </div>
                    <Form.Label className='mt-3'>Unor</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                    </div>
                    <Form.Label className='mt-3'>Golongan/Ruang</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                    </div>
                    <Form.Label className='mt-3'>Nilai Gaji</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                    </div>
                    <Form.Label className='mt-3'>Tanggal Berlaku</Form.Label>
                    <Form.Control
                      type='date'
                      name='dob'
                      placeholder='Date of Birth'
                      style={{ width: "97%" }}
                    />
                  </Col>
                  <Col></Col>
                </Form.Row>

                <div className='wizard__showButton-buttonBox mt-5'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>

                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='dokumenpendukung' title='Dokumen Pendukung'>
          <Card>
            <Card.Body>
              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Dokumen SK KGB*</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input isInvalid />
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback type='invalid'>
                      *Mohon Unggah Berkas
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </div>
              <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>

                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='status' title='Status Data'>
          <Card>
            <Card.Body>
              <h4>View Status Validasi</h4>
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
              <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>

                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>

      <br></br>
    </>
  );
}
