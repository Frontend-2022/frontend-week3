import React, {Component, Fragment} from "react";
// import { Link } from "react-router-dom";
// import { TabContent, Table, Row, Col, Card, CardBody, CardTitle,Button, ButtonGroup } from "reactstrap";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import ContentTranscript from './ContentTranscript/ContentTranscript'
import "./transcript.css"
function FooterTranscript()
{

    return(

    <div className="abc">
        <div style={{paddingTop:"30px",paddingLeft:"20px",width:"80%",color:"red",fontWeight:"bold"}}>Ghi chú</div>
        <div> - Điểm trung bình tích lũy = Tổng điểm các môn
        <b>TRONG CTDT ĐÃ HỌC & ĐẠT</b>/ Tổng số tín chỉ <b>TRONG CTDT ĐÃ HỌC & ĐẠT</b>
       <br></br> - Điểm trung bình tổng kết = Tổng điểm các môn <b>ĐÃ HỌC & ĐẠT</b>/ Tổng số tín chỉ <b>ĐÃ HỌC & ĐẠT</b>
    <br></br>    - Sinh viên kiểm tra thông tin đăng ký lớp học ôn - thi tin chuẩn đầu ra, điểm số, kết quả và cấp phát bằng theo <a href="/" style={{textDecoration:"none"}}>link sau. (TIN HỌC)</a>

    <br></br>        - Sinh viên kiểm tra thông tin đăng ký lớp học ôn - thi ngoại ngữ đầu ra, điểm số, kết quả và cấp phát bằng theo <a href="/"  style={{textDecoration:"none"}}>link sau. (NGOẠI NGỮ)</a>

        </div>

    </div>





    )
}
export default FooterTranscript;