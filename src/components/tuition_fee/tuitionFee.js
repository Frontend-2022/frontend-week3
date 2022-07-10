import React from "react";
import {NavLink,NavItem,Modal, ModalHeader, ModalBody,Row,Col,Card,CardBody,CardTitle,FormGroup,Label,Input,Table } from "reactstrap";
import "./tuitionFee.css";
class TuitionFee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div className="tuitionFeeCSS" style={{borderRadius:"5px",boxShadow:"0px 0px 5px 0px rgb(0 0 0 / 25%)",}}>
                <div className="header">
                    <NavLink onClick={this.toggle} >Thông tin sinh viên</NavLink>
                    <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle}><h51>Hệ Đào Tạo: Cao Đẳng Chính Quy</h51></ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <NavItem><h5>Họ và tên: Nguyễn Đức Tiến</h5></NavItem>
                                <NavItem><h5>MSSV: 1812020001</h5></NavItem>
                                <NavItem><h5>Ngày sinh: 20/06/1999</h5></NavItem>
                            </Col>
                            <Col>
                                <NavItem><h5>Ngành: THIẾT KẾ ĐỒ HỌA</h5></NavItem>
                                <NavItem><h5>Lớp: 12ĐHC</h5></NavItem>
                                <NavItem><h5>Giới tính: Nam</h5></NavItem>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                </div>
                <FormGroup>
                    <Label for="exampleSelect">Học kỳ</Label>
                        <Input type="select" name="select" id="exampleSelect" >
                            <option >Tất cả</option>
                            <option >Học kỳ</option>
                            <option >Học kỳ</option>
                            <option >Học kỳ</option>
                            <option >Học kỳ</option>
                        </Input>
                    </FormGroup>
                <NavItem><h4 style={{color:'#000000'}}>BẢNG KÊ CHI TIẾT HỌC PHÍ</h4></NavItem>
                <Card className="main-card mb-4" >
                                        <CardBody>
                                        <Table hover className="mb-0">
        <thead style={{backgroundColor: '#a8a3a3'}}>
          <tr>
            <th>STT</th>
            <th>Học kỳ</th>
            <th>Ngày tạo</th>
            <th>Loại PT</th>
            <th>Mã</th>
            <th>Học phí</th>
            <th>Đã thanh toán</th>
            <th>Còn lại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/" ><i class="pe-7s-print " > </i></a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <td colSpan={6} ></td >
            <th style={{color:'rgb(169, 0, 1)'}}>Học phí nợ</th>
            <th style={{color:'rgb(169, 0, 1)'}}>100</th>
            <th></th>
          </tr>
        </tbody>
      </Table>
      
                                            </CardBody>
                                            </Card>
                <Card className="main-card mb-3">
                    <CardBody>
                        <CardTitle>Lưu Ý</CardTitle>
                            <p> - Phần mềm tính học phí và hiển thị học phí của sinh viên (SV) đang trong thời gian chạy thử nghiệm. Phòng Đào tạo mong Quý Phụ huynh và SV thông cảm về những sai sót có thể phát sinh trong giai đoạn này.</p>
                            <p> - SV đóng thừa học phí sẽ được cấn trừ vào học kỳ tiếp theo. Nếu vẫn còn thừa, sẽ được nhận lại sau khi nhận bằng tốt nghiệp khóa học.</p>
                            <p> - SV có trách nhiệm tự kiểm tra học phí, khi có thắc mắc liên hệ số ĐT: 0353 4138 06 hoặc email: trangnguyen@vido.edu.vn</p>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default TuitionFee;