import React from "react";
import {NavLink,NavItem,Modal, ModalHeader, ModalBody,Row,Col,Card,CardBody,CardTitle,FormGroup,Label,Input } from "reactstrap";
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
            <div className="tuitionFeeCSS">
                <NavItem>
                    <NavLink onClick={this.toggle}>Thông tin sinh viên</NavLink>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Hệ Đào Tạo: Cao Đẳng Chính Quy</ModalHeader>
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
                </NavItem>
                <FormGroup>
                    <Label for="exampleSelect">Học kỳ</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
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