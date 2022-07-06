import React from "react";
import { Link } from "react-router-dom";
import { TabContent, Table, Row, Col,
    Card, CardBody,
    CardTitle } from "reactstrap";
import "./transcript.css";

function Transcript() {
    return(
        <div className="contentMiddle">
            <div className="bgTittle">
                <span>Kết quả học tập</span>
            </div>

            <div className="Table_header">
                <table width={'98%'} className="gridTable">
                    <tbody>
                <tr>
                        <td colSpan={2}>Họ và tên: </td>
                        <td colSpan={3}>Tạ Đức Minh </td>
                        <td colSpan={2}>Ngành: </td>
                        <td colSpan={3}>Thương mại điện tử  </td>
                </tr>
                <tr>
                        <td colSpan={2}>Mã số sinh viên: </td>
                        <td colSpan={3}> </td>
                        <td colSpan={2}>Chuyên ngành: </td>
                        <td colSpan={3}>  </td>
                </tr>
                <tr>
                        <td colSpan={2}>Ngày sinh: </td>
                        <td colSpan={3}> </td>
                        <td colSpan={2}>Hệ ĐT: </td>
                        <td colSpan={3}>  </td>
                </tr>
                <tr>
                        <td colSpan={2}>Nơi sinh: </td>
                        <td colSpan={3}> </td>
                        <td colSpan={2}>Lớp: </td>
                        <td colSpan={3}>  </td>
                </tr>
                <tr>
                        <td colSpan={2}> </td>
                        <td colSpan={3}></td>
                        <td colSpan={2}>Khóa học </td>
                        <td colSpan={3}> </td>
                </tr>

                    </tbody>
                </table>
            </div>

            <div className="Sort">
                <div className="Sort-1"><label>Năm học</label>
                    <select>
                        <option value={2026}>2026</option>
                        <option value={2025}>2025</option>
                        <option value={2024}>2024</option>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option selected={"select"} value={0}>Tất cả</option>
                    </select>
                </div>
                <div className="Sort-1"><label>Học kỳ</label>
                    <select>
                        <option value={"HKĐ"}>Học kì đầu</option>
                        <option value={"HKG"}>Học kì giữa</option>
                        <option value={"HKC"}>Học kì cuối</option>
                        <option selected={"select"} value={0}>Tất cả</option>
                    </select>
                </div>
                <div className="Sort-1"><label>Hệ điểm</label>
                    <select>
                        <option value={"10"}>10</option>
                        <option value={"4"}>4</option>
                    </select>
                </div>
                <button className="Sort-1">Xem bản in</button>
            </div>
            <div className="warn">

            </div>

                                 <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Kết quả học tập</CardTitle>
                                            <Table className="mb-0">
                                                <thead style={{backgroundColor: '#a8a3a3'}}>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Mã môn học</th>
                                                    <th>Tên môn học</th>
                                                    <th style={{textAlign:'center'}}>Số TC</th>
                                                    <th style={{textAlign:'center'}}>Điểm</th>
                                                    <th style={{textAlign:'center'}}>Điểm chữ</th>
                                                    <th style={{textAlign:'center'}}>Kết quả</th>
                                                    <th style={{textAlign:'center'}}>Ghi chú</th>
                                                    <th style={{textAlign:'center'}}>Chi tiết</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>2DH0211</td>
                                                    <td>Nguyên lý thị giác</td>
                                                    <td style={{textAlign:'center'}}>2</td>
                                                    <td style={{textAlign:'center'}}>10</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                <th scope="row">1</th>
                                                    <td>2DH0211</td>
                                                    <td>Nguyên lý thị giác</td>
                                                    <td style={{textAlign:'center'}}>2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                <th scope="row">1</th>
                                                    <td>2DH0211</td>
                                                    <td>Nguyên lý thị giác</td>
                                                    <td style={{textAlign:'center'}}>2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                <th scope="row">1</th>
                                                    <td>2DH0211</td>
                                                    <td>Nguyên lý thị giác</td>
                                                    <td style={{textAlign:'center'}}>2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                <th scope="row">1</th>
                                                    <td>2DH0211</td>
                                                    <td>Nguyên lý thị giác</td>
                                                    <td style={{textAlign:'center'}}>2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                 </Col>
            <div  className="avg">
                <tr>
                    <td colSpan={10}  > Điểm trung bình học kỳ:  8.0    </td>
                </tr>
            </div>
        </div>
    )
}

export default Transcript;