import React from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

function Schedule() {
    return(
        <div className="scheduleCSS">
            <div className="schedule__header">
                <div className="schedule__header-button">
                    <BiCaretLeft />
                </div>
                <input placeholder="tuần from...to...."></input>
                <div className="schedule__header-button">
                    <BiCaretRight/>
                </div>
            </div>

            <div className="schedule__student">
                <span>Nguyễn Đức Tiến - MSSV: 1812020001 - Lớp : 12ĐHC - Ngành : THIẾT KẾ ĐỒ HỌA</span>
            </div>

            <div className="schedule__contents">
                <div className="schedule__contents-name">
                    <span>THỜI KHÓA BIỂU THEO TUẦN HỌC KỲ HÈ, 2021 - 2022 <br/>TUẦN 3 ( 04/07/2022 - 10/07/2022 )</span>
                </div>
                <div className="schedule__contents-table">
                    TABLE
                </div>
            </div>
        </div>
    )
}

export default Schedule;