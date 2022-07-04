import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navigation() {
    return(
        <div class="navigation">            
            <Link to="/">
                <span className="navigation__name">TKB</span>
            </Link>
            <Link to="/transcript">
                <span className="navigation__name">Bảng điểm</span>
            </Link>
            <Link to="/tuitionFee">
                <span className="navigation__name">Học phí</span>
            </Link>
        </div>
    )
}

export default Navigation;