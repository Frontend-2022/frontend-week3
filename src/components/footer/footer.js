import React from "react";
import "./footer.css";
import "../basic/grid.css";

function Footer() {
    return(
        <div className="grid">
            <div className="footer-name">
                <span>Bản quyền © Trường cao đẳng Viễn Đông</span>

                <div className="footer-name__info">
                    <span className="name__info-distance">Terms and Conditions</span>
                    <span className="name__info-distance">Private</span>
                    <span className="name__info-distance">About us</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;