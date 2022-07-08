import React from "react";
import { Link } from "react-router-dom";
import { TabContent, Table, Row, Col, Card, CardBody, CardTitle,Button, ButtonGroup } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../transcript.css";
import img from '../Dau.png'
import ModalTranscript from "./ModalTranscript";
function ContentTranscript (){
        return(

            <div>

                        <Table hover className="mb-0">
                    <thead colSpan="9"></thead>
                                    <tbody>
                                                                            <tr>
                                                                        <td colspan="9" style={{backgroundColor: "#c7d6f3"}}>
                                                                            <b style={{color:"blue"}}>Năm học: 2020 - Học kỳ: HKC</b>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" style={{width:"50px"}}>1</th>
                                                                        <td style={{width:"115px"}}>2DH0211</td>
                                                                        <td style={{width:"170px"}}>Nguyên lý thị giác</td>
                                                                        <td style={{textAlign:'center',width:"50px"}}>2</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>10</td>
                                                                        <td style={{textAlign:'center',width:"88px",paddingLeft:"27px"}}> A+</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>
                                                                        <img src={img} alt="" style={{width:'12',border:0}}></img>
                                                                        </td>
                                                                        <td style={{textAlign:'right',width:"123px",paddingLeft:"27px"}}></td>
                                                                        <td style={{width:"49px"}}>
                                                                        <ModalTranscript/>

                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" style={{width:"50px"}}>1</th>
                                                                        <td style={{width:"115px"}}>2DH0211</td>
                                                                        <td style={{width:"170px"}}>Nguyên lý thị giác</td>
                                                                        <td style={{textAlign:'center',width:"50px"}}>2</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>10</td>
                                                                        <td style={{textAlign:'center',width:"88px",paddingLeft:"27px"}}> A+</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>
                                                                        <img src={img} alt="" style={{width:'12',border:0}}></img>
                                                                        </td>
                                                                        <td style={{textAlign:'right',width:"123px",paddingLeft:"27px"}}></td>
                                                                        <td style={{width:"49px"}}>
                                                                        <ModalTranscript/>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" style={{width:"50px"}}>1</th>
                                                                        <td style={{width:"115px"}}>2DH0211</td>
                                                                        <td style={{width:"170px"}}>Nguyên lý thị giác</td>
                                                                        <td style={{textAlign:'center',width:"50px"}}>2</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>10</td>
                                                                        <td style={{textAlign:'center',width:"88px",paddingLeft:"27px"}}> A+</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>
                                                                        <img src={img} alt="" style={{width:'12',border:0}}></img>
                                                                        </td>
                                                                        <td style={{textAlign:'right',width:"123px",paddingLeft:"27px"}}></td>
                                                                        <td style={{width:"49px"}}><ModalTranscript/>       </td>



                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" style={{width:"50px"}}>1</th>
                                                                        <td style={{width:"115px"}}>2DH0211</td>
                                                                        <td style={{width:"170px"}}>Nguyên lý thị giác</td>
                                                                        <td style={{textAlign:'center',width:"50px"}}>2</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>10</td>
                                                                        <td style={{textAlign:'center',width:"88px",paddingLeft:"27px"}}> A+</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>
                                                                        <img src={img} alt="" style={{width:'12',border:0}}></img>
                                                                        </td>
                                                                        <td style={{textAlign:'right',width:"123px",paddingLeft:"27px"}}></td>
                                                                        <td style={{width:"49px"}}> <ModalTranscript/>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" style={{width:"50px"}}>1</th>
                                                                        <td style={{width:"115px"}}>2DH0211</td>
                                                                        <td style={{width:"170px"}}>Nguyên lý thị giác</td>
                                                                        <td style={{textAlign:'center',width:"50px"}}>2</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>10</td>
                                                                        <td style={{textAlign:'center',width:"88px",paddingLeft:"27px"}}> A+</td>
                                                                        <td style={{textAlign:'center',width:"53px",paddingLeft:"27px"}}>
                                                                        <img src={img} alt="" style={{width:'12',border:0}}></img>
                                                                        </td>
                                                                        <td style={{textAlign:'right',width:"123px",paddingLeft:"27px"}}></td>
                                                                        <td style={{width:"49px"}}> <ModalTranscript/>
                                                                        </td>

                                                                    </tr>

                                    </tbody>
                        </Table>

                        <div  className="avg">
                            <tr>
                                <td colSpan={10}  > Điểm trung bình học kỳ:  8.0    </td>
                            </tr>
                        </div>
            </div>

        )
}
export default ContentTranscript;