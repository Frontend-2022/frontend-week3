import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,Table} from 'reactstrap';

class ModalTranscript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 me-2">
                <button  className="BtnDetail" color="primary" onClick={this.toggle}><i class="pe-7s-plus"  style={{fontSize:"24px"}}> </i></button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}  >Nguyên lý thị giác</ModalHeader>
                    <ModalBody>
                    <Table className="mb-0">
                        <thead colSpan="6">
                        <tr>
                            <th>STT</th>
                            <th>Tên thành phần</th>
                            <th>Trọng số</th>
                            <th>Điểm lần 1</th>
                            <th>Điểm lần 2</th>
                            <th>Điểm lần 3</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Điểm quá trình</td>
                            <td>50%</td>
                            <td>10</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Điểm cuối kì</td>
                            <td>50%</td>
                            <td>10</td>
                            <td></td>
                            <td></td>
                        </tr>

                        </tbody>
                    </Table>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="link" onClick={this.toggle}>Cancel</Button> */}
                        <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalTranscript;
