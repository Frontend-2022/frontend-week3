import React from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import TableBordered from "./table-schedule/table-border";

function Schedule() {
    return (
        <div className="scheduleCSS">
            <div className="schedule__header">
                <div className="schedule__header-button">
                    <BiCaretLeft />
                </div>
                <input placeholder="tuần from...to...."></input>
                <div className="schedule__header-button">
                    <BiCaretRight />
                </div>
            </div>

            <div className="schedule__student">
                <span>Nguyễn Đức Tiến - MSSV: 1812020001 - Lớp : 12ĐHC - Ngành : THIẾT KẾ ĐỒ HỌA</span>
            </div>

            <div className="schedule__contents">
                <div className="schedule__contents-name">
                    <span>THỜI KHÓA BIỂU THEO TUẦN HỌC KỲ HÈ, 2021 - 2022 <br />TUẦN 3 ( 04/07/2022 - 10/07/2022 )</span>
                </div>
                <div className="schedule__contents-table">
                    <Card className="main-card mb-0">
                        <CardBody>
                            <TableBordered />
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="schedule__note">
                <span className="schedule__note-title">Ghi chú:</span> <br />
                <span className="schedule__note-contents">
                - Hai môn học trùng giờ học nhưng có ngày bắt đầu khác nhau thì Sinh viên vẫn học được. <br />
                - Học kỳ Hè năm học 2021 - 2022 có tuần 1 bắt đầu từ ngày 20/06/2022.<br />
                - Sinh viên chú ý điều chỉnh mốc thời gian hiển thị khi xem lịch học và lịch thi.<br />
                - Lưu ý cập nhật các môn chưa có lịch học thường xuyên trên trang cá nhân.<br />
                - Những vấn đề thắc mắc sinh viên liên hệ với Phòng Đào tạo qua các phương thức sau:<br />
                Cách 1: Đăng ký giải đáp thắc mắc, lên lịch hẹn qua website www.viendong.edu.vn<br />
                Cách 2: Điện thoại trong giờ hành chính 028 3715 4288;<br />
                Cách 3: Liên hệ trực tiếp với Phòng Đào Tạo (tầng 1) hoặc qua email: pdt@vido.edu.vn;
                </span>
            </div>

        </div>
    )
}

export default Schedule;