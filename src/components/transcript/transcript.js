import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { TabContent, Table, Row, Col, Card, CardBody, CardTitle,Button, ButtonGroup } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContentTranscript from './ContentTranscript/ContentTranscript'
import "./transcript.css";

function Transcript() {
    return(
        <div className="contentMiddle" style={{borderRadius:"5px",boxShadow:"0px 0px 5px 0px rgb(0 0 0 / 25%)",}}>
            <div className="bgTittle">
                <span style={{color:"#A90001",font:"0.8em  Tahoma, Arial, Sans-Serif",fontSize:"15px",fontWeight:"bold",textTransform:"uppercase"}} >Thông tin sinh viên</span>
            </div>


            <div className="Table_header"style={{margin:"0 auto",display:"flex",width:"100%"}}>
                <table style={{marginLeft:"50px",width:"90%"}}  cellspacing="0" cellpadding="5">
                     <tbody style={{margin:0,padding:0}}>
                        <tr>
                            <th colSpan={2}>Họ và tên: </th>
                            <td colSpan={3} className="td-css">Tạ Đức Minh </td>
                            <th colSpan={2}>Ngành: </th>
                            <td colSpan={3}>Thương mại điện tử  </td>
                        </tr>

                        <tr>
                            <th colSpan={2}>MSSV: </th>
                            <td colSpan={3}  className="td-css"> </td>
                            <th colSpan={2}>Chuyên ngành: </th>
                            <td colSpan={3}  className="td-css">  </td>
                        </tr>

                        <tr>
                            <th colSpan={2}>Ngày sinh: </th>
                            <td colSpan={3}  className="td-css"> </td>
                            <th colSpan={2}>Hệ ĐT: </th>
                            <td colSpan={3}  className="td-css">  </td>
                        </tr>

                        <tr>
                            <th colSpan={2}>Nơi sinh: </th>
                            <td colSpan={3}  className="td-css"> </td>
                            <th colSpan={2}>Lớp: </th>
                            <td colSpan={3} className="td-css">  </td>
                        </tr>

                        <tr>

                            <th colSpan={2}>Khóa học: </th>
                            <td colSpan={3} className="td-css"> </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <hr style={{border:0,borderTop:"1px solid #eee",width:"90%"}}></hr>
            <div className="Sort">
                <div className="Sort-1"><label style={{fontSize:'14px'}}>Năm học</label>
                    <select className="slect">
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
                <div className="Sort-1"><label style={{fontSize:'14px'}}>Học kỳ</label>
                    <select className="slect">
                        <option value={"HKĐ"}>Học kì đầu</option>
                        <option value={"HKG"}>Học kì giữa</option>
                        <option value={"HKC"}>Học kì cuối</option>
                        <option selected={"select"} value={0}>Tất cả</option>
                    </select>
                </div>
                <div className="Sort-1"><label style={{fontSize:'14px'}}>Hệ điểm</label>
                    <select className="slect">
                        <option value={"10"}>10</option>
                        <option value={"4"}>4</option>
                    </select>
                </div>
                <Button outline className="mb-2 me-2 btn-transition btn-primary" color="primary">Xem bản in</Button>
            </div>
            <hr style={{border:0,borderTop:"1px solid #eee",width:"90%"}}></hr>
            <div className="warn">
                <strong style={{width:'130px' , display:'flex',justifyContent:"space-between", marginLeft:"20px",marginTop:"5px"}}>
                    <u>Chú ý:</u>
                </strong>
                    <div style={{width:'130px' , display:'flex', marginLeft:"20px",marginTop:"5px"}}>
                    <img src="https://student.ueh.edu.vn/Content/images/Dau.png" alt="" style={{width:'15',border:0,marginRight:"15px"}}>
                    </img>
                      <p> Học phần đậu</p>
                    </div>
                    <div style={{width:'130px' , display:'flex', marginLeft:"20px",marginTop:"5px"}}>
                    <img src="https://student.ueh.edu.vn/Content/images/Rot.png" alt="" style={{width:'15',border:0,marginRight:"22px"}}>
                    </img>
                      <p >  Học phần rớt</p>
                    </div>
            </div>



                                 <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Kết quả học tập</CardTitle>
                                            <Table hover className="mb-0">
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

                                            </Table>

                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>
                                            <ContentTranscript/>

                                        </CardBody>
                                    </Card>
                                 </Col>
        </div>
    )
}

export default Transcript;