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
  
  import "bootstrap/dist/css/bootstrap.min.css";
  
  export default function StatusVWXY8C(props) {
    function StatusVWXY8C() {}
  
    return (
      <>
 
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
                      <td>Penilaian prestasi kerja/DP-3 dalam 1 (satu) tahun terakhir rata-rata bernilai baik, dengan ketentuan tidak ada unsur penilaian prestasi kerja yang bernilai kurang.</td>
                      <td className="text-center">
                        <input type="checkbox" className="css-checkbox" id="checkbox1"  />
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                  </tbody>
                </Table>
  
               
              </Card.Body>
            </Card>
        <br></br>
      </>
    );
  }
  