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
  
  export default function StatusVWXY7A(props) {
    function StatusVWXY7A() {}
  
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
                      <td>Sekurang-kurangnya telah 1 (satu) tahun dalm pangkat terakhir</td>
                      <td className="text-center">
                        
                        <input type="checkbox" className="css-checkbox" id="checkbox1"  />
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>

                      {/* Catatan */}
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
  